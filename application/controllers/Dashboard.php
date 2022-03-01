<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends MY_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->model('general_model');
        $_SESSION['lang'] = 'english';
        $_SESSION['userid'] = 'admin01';

        $this->data = $this->general_model->first('admin', array('admin_uid' => $_SESSION['userid']));
    }

    public function index() {
        $this->data['pageTitle'] = $this->lang->line('dashboard');
        $this->loadPage('dashboard', $this->data);
    }

    public function property() {
        $this->data['pageTitle'] = $this->lang->line('properties');
        $this->data['properties'] = $this->general_model->find('property', array('is_deleted' => 0));
        $this->loadPage('property', $this->data);
    }

    public function entry() {
        $this->data['pageTitle'] = $this->lang->line('visitorentry');
        $this->data['properties'] = $this->general_model->find('property', array('is_deleted' => 0));
        $this->loadPage('visitor_entry', $this->data);
    }

    public function visitor($page = '') {
        $this->load->model('visitor_model');
        $this->data['pageTitle'] = $this->lang->line('myvisitor');

        switch ($page) {
            case 'edit':
                // code...
                $vid = $_GET['vid'];
                $this->data['properties'] = $this->general_model->find('property', array('is_deleted' => 0));
                $this->data['visitor'] = $this->visitor_model->getVisitor($vid);
                $page = 'visitor_edit';
                break;

            default:
                // code...
                $this->data['visitors'] = $this->visitor_model->getAllVisitors($_GET);
                $page = 'visitor';
                break;
        }
        $this->loadPage($page, $this->data);
    }

    protected function loadPage($page = 'dashboard', $data = array()) {
        $data['menu'] = $this->load->view('templates/side_nav.php', $data, TRUE);
        $this->load->view('templates/header.php', $data);
		$this->load->view('admin/'.$page.'.php', $data);
		$this->load->view('templates/footer.php');
    }
}
