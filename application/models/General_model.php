<?php
class General_model extends MY_Model {
    public function __construct() {
        parent::__construct();
    }

    public function create($table, $data){
        $this->db->insert($table, $data);
        return $this->db->insert_id();
    }

    public function get($table, $id){
        $query = $this->db->get_where($table, array('id' => $id, "is_deleted" => 0));
        return $query->row_array();
    }

    public function find($table, $cond){
        $this->db->order_by($table.'.id', 'ASC');
        $query = $this->db->get_where($table, $cond);
        return $query->result_array();
    }

    public function update($table, $idOrCond, $data){
        if(is_array($idOrCond)){
            foreach ($idOrCond as $key => $value) {
                $this->db->where($key, $value);
            }
        } else {
            $this->db->where('id', $idOrCond);
        }
        return $this->db->update($table, $data);
    }

    public function first($table, $cond){
        $this->db->order_by($table.'.id', 'ASC');
		$this->db->limit(1);
		$query = $this->db->get_where($table, $cond);
		if(sizeof($query->result_array()) > 0)
	    	return $query->result_array()[0];
		return array();
    }

    public function delete($table, $id){
        $this->db->set('is_deleted', 1);
        $this->db->where('id', $id);
        return $this->db->update($table);
    }
}
