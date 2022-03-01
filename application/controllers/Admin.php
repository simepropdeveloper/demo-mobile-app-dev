<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends MY_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->model('general_model');
        $this->load->config('dca');
    }

    public function adminCreateVisitor() {
        $admin = $this->general_model->first('admin', array('admin_uid' => $_SESSION['userid']));

        if (!isset($admin['property_mgmt']) || $admin['property_mgmt'] == 0) {
            $this->respError($this->lang->line('notauthorized'));
        }

        $postData = array();
        $postData['user'] = $admin['admin_uid'];
        $postData['property'] = $this->input->post('property');
        $postData['name'] = $this->input->post('name');
        $postData['plateno'] = $this->input->post('plateno');
        $postData['mobileno'] = $this->input->post('mobileno');
        $postData['entrytype'] = $this->input->post('entrytype');
        $postData['date'] = $this->input->post('date');
        $postData['approval'] = $this->input->post('approval');

        if (empty($postData['property']) || empty($postData['name']) || empty($postData['plateno']) || empty($postData['mobileno']) || empty($postData['entrytype']) || empty($postData['date'])) {
            $this->respError($this->lang->line('fillinallfields'));
        }

        $endpoint = $this->config->item('dca_endpoint_create');
        $this->resp($this->doPostApi($postData, $endpoint));
    }

    public function adminEditVisitor() {
        $admin = $this->general_model->first('admin', array('admin_uid' => $_SESSION['userid']));

        if (!isset($admin['property_mgmt']) || $admin['property_mgmt'] == 0) {
            $this->respError($this->lang->line('notauthorized'));
        }

        $postData = array();
        $postData['user'] = $admin['admin_uid'];
        $postData['visitor'] = $this->input->post('visitor');
        $postData['property'] = $this->input->post('property');
        $postData['name'] = $this->input->post('name');
        $postData['plateno'] = $this->input->post('plateno');
        $postData['mobileno'] = $this->input->post('mobileno');
        $postData['entrytype'] = $this->input->post('entrytype');
        $postData['date'] = $this->input->post('date');
        $postData['approval'] = $this->input->post('approval');

        if (empty($postData['visitor']) || empty($postData['property']) || empty($postData['name']) || empty($postData['plateno']) || empty($postData['mobileno']) || empty($postData['entrytype']) || empty($postData['date'])) {
            $this->respError($this->lang->line('fillinallfields'));
        }

        $endpoint = $this->config->item('dca_endpoint_edit');
        $this->resp($this->doPostApi($postData, $endpoint));
    }

    public function adminDeleteVisitor() {
        $admin = $this->general_model->first('admin', array('admin_uid' => $_SESSION['userid']));

        if ($admin['admin_type'] != 1 || !isset($admin['property_mgmt']) || $admin['property_mgmt'] == 0) {
            $this->respError($this->lang->line('notauthorized'));
        }

        $postData = array();
        $postData['user'] = $admin['admin_uid'];
        $postData['visitor'] = $this->input->post('visitor');

        if (empty($postData['visitor'])) {
            $this->respError($this->lang->line('fillinallfields'));
        }

        $endpoint = $this->config->item('dca_endpoint_delete');
        $this->resp($this->doPostApi($postData, $endpoint));
    }

    private function doPostApi($postData, $endpoint) {
        $postData['app_id'] = $this->config->item('dca_appid');
        $key = $this->config->item('dca_key');
        $secret = $this->config->item('dca_secret');
        $apiUrl = $this->config->item('dca_api_base_url');

        $str = http_build_query($postData, '', '&');
		$sign = hash('sha256', urldecode($str).$secret);

        $url = $apiUrl.$endpoint;
        $headers = [
			'Content-type:application/x-www-form-urlencoded',
			'key:'.$key,
			'sign:'.$sign,
			'from:dca',
			'origin:http://localhost/dca',
			'language:en',
			'version:2.0',
		];

        $options = [
            CURLOPT_URL        		=> $url,
			CURLOPT_RETURNTRANSFER  => true,
			CURLOPT_POST       		=> true,
			CURLOPT_POSTFIELDS 		=> $str,
			CURLOPT_HTTPHEADER 		=> $headers,
        ];

        $curl = curl_init();
		curl_setopt_array($curl, $options);
		$result = curl_exec($curl);
		curl_close($curl);

        if ($result == '') {
            return [
				'status' => -1,
				'msg' => $this->lang->line('api_failresponse'),
			];
        } else {
            $decoded = json_decode($result,true);
            if (json_last_error() === JSON_ERROR_NONE) {
                return $decoded;
            } else {
                return [
    				'status' => -1,
    				'msg' => $this->lang->line('api_faildopost'),
    			];
            }
        }
    }
}
