<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller{
    public function __construct(){
        parent::__construct();
        if($this->session->has_userdata('lang')){
            $this->lang->load('dashboard', $this->session->userdata('lang'));
        } else {
            $this->lang->load('dashboard', 'english');
        }
        $this->load->helper('language');
    }

    protected function resp($data) {
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
		die();
    }

    protected function respSuccess($obj){
		if (is_array($obj)) {
			echo json_encode(array("status"=>"1","data"=>$obj), JSON_UNESCAPED_UNICODE);
		} else {
			echo json_encode(array("status"=>"1","msg"=>$obj), JSON_UNESCAPED_UNICODE);
		}
		die();
	}

	protected function respError($msg){
		echo json_encode(array("status"=>"-1","msg"=>$msg), JSON_UNESCAPED_UNICODE);
		die();
	}

    protected function uploadHandler($formFileName, $path, $allowed = 'jpg|jpeg|png'){
		$this->load->library('upload');
		if (!is_dir("./uploads")){
			mkdir("./uploads");
		}
		if (!is_dir("./uploads/".$path)){
			mkdir("./uploads/".$path);
		}

		if(isset($_FILES[$formFileName]) && is_uploaded_file($_FILES[$formFileName]['tmp_name'])){

			$name_part = explode('.', $_FILES[$formFileName]['name']);
			$ext = end($name_part);
			$filename = date('mdHis').simplehash($_FILES[$formFileName]['name'].time());
			$config['upload_path']          = "./uploads/$path/";
			$config['file_name']        	= $filename;
			$config['allowed_types']        = $allowed;
			$config['max_size']             = 8000;

			$this->upload->initialize($config);
			if (!$this->upload->do_upload($formFileName)){
				return [-1, "Please contact administrator. Code: $formFileName ".$this->upload->display_errors()];
			} else {
				return [1, "uploads/$path/".$filename.'.'.$ext];
			}
		} else {
			return [-1, 'File failed to upload.'];
		}
	}
}
