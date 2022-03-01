<div id="page-wrapper">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <?= lang('vl_listing'); ?>
                </div>
                <div class="panel-body">
                    <div class="overflow" style="overflow:auto">
                        <table class="table table-striped table-hover tablesorter">
                            <?php ?>
                            <thead>
                                <tr>
                                    <th><?= lang('ve_name') ?></th>
                                    <th><?= lang('ve_house') ?></th>
                                    <th><?= lang('vl_action') ?></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach($visitors as $v) { ?>
                                    <tr data-vid="<?= $v['id'] ?>">
                                        <td><?= $v['name'] ?></td>
                                        <td><?= $v['display_name'] ?></td>
                                        <td>
                                            <button class='btn btn-xs btn-success btn-edit' data-id='<?= $v['id'] ?>'><?= lang('vl_edit') ?></button>
                                            <button class='btn btn-xs btn-danger btn-action' data-id='<?= $v['id'] ?>'><?= lang('vl_delete') ?></button>
                                        </td>
                                    </tr>
                                <?php } ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modal-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel"><?= lang('vl_deletetitle') ?></h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class='col-md-12'>
                        <h5><?= lang('vl_deletebody') ?></h5>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal"><?= lang('vl_cancel')?></button>
                <button type="button" class="btn btn-danger btn-delete" data-dismiss="modal"><?= lang('vl_ok')?></button>
            </div>
        </div>
    </div>
</div>
<script>
$('.btn-edit').click(function(){
    var id = $(this).data('id');
    var urlParam = [];
    urlParam.push('vid=' + id);
    setTimeout(function(){location = b_url + 'dashboard/visitor/edit?' + urlParam.join('&');},500);
    return false;
});

$('.btn-action').click(function(){
    $('.btn-delete').data('id', $(this).data('id'));
    $("#modal-delete").modal("show");
    return false;
});

$('.btn-delete').click(function(){
    var id = $(this).data('id');
    var formData = new FormData();
    formData.append('visitor', id);

    CK.Server.run('Admin/adminDeleteVisitor', formData, function(resp){
        CK.Util.handleResp(resp, function(){
            setTimeout(function(){location=b_url+"dashboard/visitor"},500);
        });
    }, this);
    return false;
});
</script>
