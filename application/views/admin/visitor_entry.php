<div id="page-wrapper">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <?= lang('visitorentry'); ?>
                </div>
                <div class="panel-body">
                    <form class="form-horizontal form-add-visitor">
                        <?php $this->load->view('admin/visitor_form', $this->data) ?>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
$('.form-add-visitor').submit(function(){
    var formData = new FormData();
    formData.append('property', $("#property").val());
    formData.append('name', $("#name").val());
    formData.append('plateno', $("#plateno").val());
    formData.append('mobileno', $("#mobileno").val());
    formData.append('entrytype', $("#entrytype").val());
    formData.append('date', $("#date").val());
    formData.append('approval', $("#approval").val());

    CK.Server.run('Admin/adminCreateVisitor', formData, function(resp){
        CK.Util.handleResp(resp, function(){
            setTimeout(function(){location=b_url+"dashboard/visitor"},500);
        });
    }, this);

    return false;
});
</script>
