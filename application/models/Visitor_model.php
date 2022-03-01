<?php
class Visitor_model extends MY_Model {
    public function __construct() {
        parent::__construct();
    }

    public function searchVisitor($searchKey){
		$searchKey = '%'.$searchKey.'%';
		$q = "SELECT id, fname from visitor where (id like ? or fname like ?) and is_deleted = 0 limit 5";
		$visitors = $this->db->query($q, [$searchKey,$searchKey])->result_array();

		return $visitors;
	}

    public function getVisitor($vid) {
		$visitor = $this->db->get_where('visitor', array('id' => $vid, 'is_deleted' => 0))->row_array();
		return $visitor;
	}

    public function getAllVisitors($data) {
        $cond = '';
        if(isset($data['name'])){
            $cond .= "AND v.name like '%".$data['name']."%' ";
        }

        $q = "SELECT v.id, v.name, p.display_name from visitor v left join property p on p.id = v.property_id where v.is_deleted = 0 $cond order by v.id desc";
        return $this->db->query($q)->result_array();
    }
}
