<?php
class MY_Model extends CI_Model {
    public function __construct(){
        $this->load->database();
        $this->db->query("SET time_zone='+8:00'");
    }
}
