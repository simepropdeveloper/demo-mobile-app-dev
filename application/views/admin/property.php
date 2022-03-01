<div id="page-wrapper">
    <div class="row">
        <div class="col-md-9 col-sm-9">
            <section id="property-detail">
                <header><h1>Property A</h1></header>
                <section id="property-gallery">
                    <div class="property-image">
                        <a href="<?= base_url().'assets/img/property.jpg'?>"><img alt="" src="<?= base_url().'assets/img/property.jpg'?>" style="width:100%; height: auto"></a>
                    </div>
                </section>
            </section>
            <div class='col-sm-6'>
                <div class="card" style="margin-top: 30px;">
                    <div class="header">
                        Family Member
                    </div>
                    <div class="panel-body">
                        <table class="table table-striped table-hover tablesorter">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kevin</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Kyrie</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Ben</td>
                                    <td>Pending Approval</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class='col-sm-6'>
                <div class="card" style="margin-top: 30px;">
                    <div class="header">
                        Latest Bill
                    </div>
                    <div class="panel-body">
                        <table class="table table-striped table-hover tablesorter">
                            <thead>
                                <tr>
                                    <th>Invoice Number</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Done</td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class='col-sm-6'>
                <div class="card" style="margin-top: 30px;">
                    <div class="panel-body">
                        <div>
                            <label class="col-sm-4 control-label" for="default">Set as default</span></label>
                            <div class="col-sm-8">
                                <select class="form-control" id="default" name="default" required>
                                    <option value="1"><?= lang('ve_yes') ?></option>
                                    <option value="0"><?= lang('ve_no') ?></option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label class="col-sm-4 control-label" for="approval">Receive approval</span></label>
                            <div class="col-sm-8">
                                <select class="form-control" id="approval" name="approval" required>
                                    <option value="1"><?= lang('ve_yes') ?></option>
                                    <option value="0"><?= lang('ve_no') ?></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
