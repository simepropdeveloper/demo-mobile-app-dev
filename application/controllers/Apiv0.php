<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Apiv0 extends MY_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->model('general_model');
        $this->load->model('visitor_model');
    }

    public function visitor($url = '') {
        $appId = $this->input->post('app_id', true);
        if (empty($appId)) {
            $this->returnResponse(-1, $this->lang->line('api_invalidparam'));
        }
        $apiKey = $this->input->get_request_header('key');
        $signature = $this->input->get_request_header('sign');
        if (!$this->validateApiKey($appId, $apiKey)) {
            $this->returnResponse(-1, $this->lang->line('api_invalidapikey'));
        }

        if (!$this->validateSignature($appId, $this->input->post(), $signature)) {
            $this->returnResponse(-1, $this->lang->line('api_invalidapikey'));
        }

        $stat = -1;
        $msg = $this->lang->line('api_invalidurl');
        $data = array();
        $logId = $this->createInboundLog($appId, base_url().'apiv0/visitor/'.$url, $this->input->post());
        switch ($url) {
            case 'create':
            case 'edit' :
                $adminUid = $this->input->post('user');
                $admin = $this->general_model->first('admin', array('admin_uid' => $adminUid));

                if (!isset($admin['property_mgmt']) || $admin['property_mgmt'] == 0) {
                    $msg = $this->lang->line('notauthorized');
                    break;
                }

                $propertyId = $this->input->post('property');
                $property = $this->general_model->first('property', ['id' => $propertyId, 'is_deleted' => 0]);
                if (!isset($property['id'])) {
                    $msg = $this->lang->line('api_invalidproperty');
                    break;
                }

                $name = $this->input->post('name');
                $plateno = $this->input->post('plateno');
                $mobileno = $this->input->post('mobileno');
                $entrytype = $this->input->post('entrytype');
                $date = $this->input->post('date');
                $approval = $this->input->post('approval');

                if ($url == 'create') {
                    $id = $this->general_model->create('visitor', [
                        'created_by' => $admin['admin_uid'],
                        'property_id' => $propertyId,
                        'name' => $name,
                        'plate_no' => $plateno,
                        'mobile_no' => $mobileno,
                        'entry_type' => $entrytype,
                        'date' => $date,
                        'approval' => $approval
                    ]);
                } else {
                    $visitorId = $this->input->post('visitor');
                    $visitor = $this->general_model->first('visitor', ['id' => $visitorId, 'is_deleted' => 0]);
                    if (!isset($visitor['id'])) {
                        $msg = $this->lang->line('api_invalidparam');
                        break;
                    }
                    $id = $this->general_model->update('visitor', $visitorId, [
                        'property_id' => $propertyId,
                        'name' => $name,
                        'plate_no' => $plateno,
                        'mobile_no' => $mobileno,
                        'entry_type' => $entrytype,
                        'date' => $date,
                        'approval' => $approval
                    ]);
                }
                $stat = $id ? 1 : -1;
                $msg = $id ? $this->lang->line('api_success') : $this->lang->line('api_failed');
                break;

            case 'delete':
                // code...
                $adminUid = $this->input->post('user');
                $admin = $this->general_model->first('admin', array('admin_uid' => $adminUid));

                if ($admin['admin_type'] != 1 || !isset($admin['property_mgmt']) || $admin['property_mgmt'] == 0) {
                    $msg = $this->lang->line('notauthorized');
                    break;
                }
                $visitorId = $this->input->post('visitor');
                $visitor = $this->general_model->first('visitor', ['id' => $visitorId, 'is_deleted' => 0]);
                if (!isset($visitor['id'])) {
                    $msg = $this->lang->line('api_invalidparam');
                    break;
                }
                $id = $this->general_model->delete('visitor', $visitorId);
                $stat = $id ? 1 : -1;
                $msg = $id ? $this->lang->line('api_success') : $this->lang->line('api_failed');
                break;

            default:
                // code...
                break;
        }

        $this->returnResponse($stat, $msg, $data, $logId);
    }

    private function createInboundLog($appId, $endpoint, $data) {
        return $this->general_model->create('api_inbound_log', [
            'app_id' => $appId,
            'endpoint' => $endpoint,
            'params' => json_encode($data, JSON_UNESCAPED_UNICODE),
        ]);
    }

    private function validateApiKey($appId, $apiKey) {
        $validKey = '';
        $app = $this->general_model->first('api_config', ['app_id' => $appId]);
        if (isset($app['api_key'])) {
            $validKey = $app['api_key'];
        }
        return $apiKey == $validKey;
    }

    private function validateSignature($appId, $data, $signature) {
        $secretKey = '';
        $app = $this->general_model->first('api_config', ['app_id' => $appId]);
        if (isset($app['secret_key'])) {
            $secretKey = $app['secret_key'];
        }
        $str = http_build_query($data, '', '&');
        $validSignature = hash('sha256', urldecode($str).$secretKey);
        return $signature == $validSignature;
    }

    private function returnResponse($status, $msg, $logId = -1, $data = []) {
        $respData = ['status' => $status, 'msg' => $msg];
        if (!empty($data)) {
            $respData['data'] = $data;
        }
        $resp = json_encode($respData, JSON_UNESCAPED_UNICODE);
        if ($logId > 0) {
            $this->general_model->update('api_inbound_log', $logId, ['status' => $status, 'response' => $resp, 'response_at' => date('Y-m-d H:i:s')]);
        }
        echo $resp;
        die();
    }
}
