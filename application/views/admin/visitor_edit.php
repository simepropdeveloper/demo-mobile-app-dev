<div id="page-wrapper">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <?= lang('visitorentry'); ?>
                </div>
                <div class="panel-body">
                    <form class="form-horizontal form-edit-visitor" data-id='<?= $visitor['id'] ?>'>
                        <?php $this->load->view('admin/visitor_form', $this->data) ?>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
$(document).ready(function () {
    $('#property').val(<?= $visitor['property_id']?>);
    $('#name').val('<?= $visitor['name']?>');
    $('#plateno').val('<?= $visitor['plate_no']?>');
    $('#mobileno').val('<?= $visitor['mobile_no']?>');
    $('#entrytype').val(<?= $visitor['entry_type']?>);
    $('#date').val('<?= $visitor['date']?>');
    $('#approval').val(<?= $visitor['approval']?>);
});
$('.form-edit-visitor').submit(function(){
    var id = $(this).data('id');
    var formData = new FormData();
    formData.append('visitor', id);
    formData.append('property', $("#property").val());
    formData.append('name', $("#name").val());
    formData.append('plateno', $("#plateno").val());
    formData.append('mobileno', $("#mobileno").val());
    formData.append('entrytype', $("#entrytype").val());
    formData.append('date', $("#date").val());
    formData.append('approval', $("#approval").val());

    CK.Server.run('Admin/adminEditVisitor', formData, function(resp){
        CK.Util.handleResp(resp, function(){
            setTimeout(function(){location=b_url+"dashboard/visitor"},500);
        });
    }, this);

    return false;
});
</script>
