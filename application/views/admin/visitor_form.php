<div class="col-sm-12">
    <div class="row">
        <div class="col-sm-5">
            <div class="form-group">
                <label class="col-sm-4 control-label" for="property"><?= lang('ve_house'); ?></span></label>
                <div class="col-sm-8">
                    <select class="form-control" id="property" name="property" required>
                        <option value=""><?= lang('ve_househint') ?></option>
                        <?php foreach($properties as $p) { ?>
                            <option value="<?= $p['id'] ?>"><?= $p['display_name'] ?></option>
                        <?php } ?>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4 control-label" for="name"><?= lang('ve_name'); ?></span></label>
                <div class="col-sm-8">
                    <input name="name" id="name" type="text" class="form-control" placeholder="<?= lang('ve_namehint') ?>" required="">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4 control-label" for="plateno"><?= lang('ve_plateno'); ?></span></label>
                <div class="col-sm-8">
                    <input name="plateno" id="plateno" type="text" class="form-control" placeholder="<?= lang('ve_platenohint') ?>" required="">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4 control-label" for="mobileno"><?= lang('ve_mobileno'); ?></span></label>
                <div class="col-sm-8">
                    <input name="mobileno" id="mobileno" type="tel" class="form-control" placeholder="<?= lang('ve_mobilenohint') ?>" required="">
                </div>
            </div>
        </div>
        <div class="col-sm-2"></div>
        <div class="col-sm-5">
            <div class="form-group">
                <label class="col-sm-4 control-label" for="entrytype"><?= lang('ve_entrytype'); ?></span></label>
                <div class="col-sm-8">
                    <select class="form-control" id="entrytype" name="entrytype" required>
                        <option value="1"><?= lang('entrytype_1') ?></option>
                        <option value="2"><?= lang('entrytype_2') ?></option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4 control-label" for="date"><?= lang('ve_date'); ?></span></label>
                <div class="col-sm-8">
                    <input name="date" id="date" type="date" class="form-control" placeholder="<?= lang('ve_datehint') ?>" min="<?= date('Y-m-d'); ?>" required="">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4 control-label" for="approval"><?= lang('ve_approval'); ?></span></label>
                <div class="col-sm-8">
                    <select class="form-control" id="approval" name="approval" required>
                        <option value="1"><?= lang('ve_yes') ?></option>
                        <option value="0"><?= lang('ve_no') ?></option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group"  style="margin-top: 10px;">
        <label class="col-md-6 control-label" for="btn-submit"></label>
        <div class="col-md-6">
            <button id="btn-submit" name="btn-submit" class="btn btn-primary btn-submit">Submit</button>
        </div>
    </div>
</div>
