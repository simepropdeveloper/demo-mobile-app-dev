            </div>
        </div>
	    <footer class="footer">
		    <div class="container-fluid">
		        <p class="copyright text-center">
		            Copyright <?= date('Y')?> <span><?= lang('companyname') ?></span>. All rights reserved.
		        </p>
		    </div>
		</footer>
    </div>
</div>
<div hidden class="template">
    <table>
        <tfoot>
            <tr>
                <th colspan="7" class="ts-pager form-horizontal">
                    <button type="button" class="btn btn-xs btn-primary first"><i class="fa fa-angle-double-left"></i></button>
                    <button type="button" class="btn btn-xs btn-primary prev"><i class="fa fa-angle-left"></i></button>
                    <span class="pagedisplay"></span>
                    <button type="button" class="btn btn-xs btn-primary next"><i class="fa fa-angle-right"></i></button>
                    <button type="button" class="btn btn-xs btn-primary last"><i class="fa fa-angle-double-right"></i></button>
                    <?= lang('fs_recordsperpage'); ?>:
                    <select class="pagesize input-mini">
                        <option selected="selected" value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <?= lang('fs_gotopage'); ?>:
                    <select class="pagenum input-mini"></select>
                </th>
            </tr>
        </tfoot>
    </table>
</div>
<!-- =========================
 SCRIPTS
============================== -->
<script src="<?= base_url() ?>assets/js/jquery.easing.1.3.min.js"></script>
<script src="<?= base_url() ?>assets/js/jquery.countTo.js"></script>
<script src="<?= base_url() ?>assets/js/jquery.formchimp.min.js"></script>
<script src="<?= base_url() ?>assets/js/jquery.jCounter-0.1.4.js"></script>
<script src="<?= base_url() ?>assets/js/jquery.magnific-popup.min.js"></script>
<script src="<?= base_url() ?>assets/js/jquery.vide.min.js"></script>
<!--  Forms Validations Plugin -->
<script src="<?= base_url() ?>assets/js/jquery.validate.min.js"></script>

<!--  Notifications Plugin    -->
<script src="<?= base_url() ?>assets/js/bootstrap-notify.js"></script>

<!-- Sweet Alert 2 plugin -->
<script src="<?= base_url() ?>assets/js/sweetalert2.js"></script>

<!-- Light Bootstrap Dashboard Core javascript and methods -->
<script src="<?= base_url() ?>assets/js/light-bootstrap-dashboard.js"></script>
<script src="<?= base_url() ?>assets/js/summernote.min.js" type="text/javascript"></script>
<script>
	<?php $segment2 = $this->uri->segment(2);?>
	$(document).ready(function(){
		$('.tablesorter').parent().addClass('overflow');
		$('.page-sidebar-menu li a[href="<?php echo base_url(uri_string());?>"]').parents('li').addClass('active open');
        if($('li a[href="<?php echo base_url(uri_string()); ?>"]').parents('ul').hasClass('sub-menu')){
            $('.page-sidebar-menu li a[href="<?php echo base_url(uri_string()); ?>"]').parents('li').addClass('active');
            $('.page-sidebar-menu li a[href="<?php echo base_url(uri_string()); ?>"]').parents('li').find('.collapse').collapse('show');
        }

        var $summernote = $('.summernote,.summernote_edit').summernote({
            toolbar: [
                // [groupName, [list of button]]
                ['fontsize', ['fontname','fontsize','style']],
                ['style', ['bold', 'italic', 'underline','superscript', 'subscript', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph', 'height']],
                ['insert', ['link','hr','table']],
                ['action', ['undo','redo']]
            ],
            height: 100,
            dialogsInBody: true,
            callbacks: {
                onImageUpload: function(image) {
                    uploadImage(image[0]);
                }
            }
        });
	});
</script>
<script>
$('body').append($('.modal').detach());
$(document).ready(function(){
	$('.dropdown-menu > li:first-child > a').click();
});
</script>
</body>
</html>
