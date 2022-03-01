<!doctype html>
<html lang="en" style="overflow: hidden;">
<head>
    <meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <meta name="keywords" content="">
    <meta name="description" content="">

    <!-- Bootstrap core CSS     -->
    <link href="<?= base_url(); ?>assets/css/bootstrap.min.css" rel="stylesheet" />

    <!--  Light Bootstrap Dashboard core CSS    -->
    <link href="<?= base_url(); ?>assets/css/light-bootstrap-dashboard.css" rel="stylesheet"/>

    <!--     Fonts and icons     -->
    <link href="<?= base_url(); ?>assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="<?= base_url(); ?>assets/css/fontawesome-pro-core.css" rel="stylesheet" >
  	<link href="<?= base_url(); ?>assets/css/fontawesome-pro-light.css" rel="stylesheet" >
    <link href="<?= base_url(); ?>assets/css/pe-icon-7-stroke.css" rel="stylesheet" />

    <!-- Tablesorter CSS -->
    <link href="<?= base_url(); ?>assets/css/theme.bootstrap.min.css" rel="stylesheet">
	<link href="<?= base_url(); ?>assets/css/jquery.tablesorter.pager.min.css" rel="stylesheet">

    <!--     Custom CSS     -->
    <link href="<?= base_url(); ?>assets/css/dashboard.css" rel="stylesheet" />

    <style>
	 .flag{
		 display:inline-block;
	 }
	 a{
		 color:#3d3881
	 }
	 .sidebar{
		 color: #fff;
	 }
	 .sidebar .nav p {
	    font-size: 14px;
		font-weight: 400;
	}
	.sidebar .nav li>a{
		color: #fff;
	}
	.sidebar .nav li.active>a, .sidebar .nav li:hover>a{
		color: #fff;
	}
	@media (max-width: 992px){
		.sidebar .nav>li>a, .bootstrap-navbar .nav>li>a {
			color: #fff !important;
		}
	}
	.nav-open .nav .caret{
		border-bottom-color: #fff;
    	border-top-color: #fff;
	}
	/* .card .title{
		color: #ffb536 !important;
	} */
	.modal-backdrop {
	    z-index: 1028;
	}
	.modal {
	    z-index: 1029;
	}

	.form-control-static{
		padding-top:11px;
		padding-bottom: 0;
		font-size: 13px;
		font-weight:bold;
	}

	</style>
	<link rel="shortcut icon" href="<?= base_url(); ?>assets/images/icon.png" />

    <!--   Core JS Files and PerfectScrollbar library inside jquery.ui   -->
	<script src="<?= base_url() ?>assets/js/jquery.min.js" type="text/javascript"></script>
	<script src="<?= base_url() ?>assets/js/jquery-ui.min.js" type="text/javascript"></script>
	<script src="<?= base_url() ?>assets/js/bootstrap.min.js" type="text/javascript"></script>

    <!-- Tablesorter JavaScript -->
	<script src="<?= base_url(); ?>assets/js/jquery.tablesorter.combined.min.js"></script>
	<script src="<?= base_url(); ?>assets/js/widget-pager.min.js"></script>
	<script src="<?= base_url(); ?>assets/js/jquery.tablesorter.pager.min.js"></script>
	<script src="<?= base_url(); ?>assets/js/tablesorter.js"></script>

    <script>
		var b_url = "<?= base_url() ?>";
		var msg_errorContactAdmin = '<?= lang('errorContactAdmin'); ?>';
		var msg_errorInternetCon = '<?= lang('errorInternetCon'); ?>';
        var msg_errorInternetCon1 = '<?= lang('errorInternetCon1'); ?>';
        var msg_errorInternetCon2 = '<?= lang('errorInternetCon2'); ?>';
        var msg_errorInternetCon3 = '<?= lang('errorInternetCon3'); ?>';
        var msg_errorInternetCon4 = '<?= lang('errorInternetCon4'); ?>';
	</script>
    <!--     Custom JS     -->
    <script src="<?= base_url(); ?>assets/js/CK.js"></script>
</head>
<body>
    <div class="wrapper">
        <div class="sidebar" style="">
            <div class="logo">
                <a href="#" class="logo-text" style="padding:0px">
                    <!-- <img src="<?= base_url();?>img/logo.png" alt="" style="height:120px"> -->
                </a>
            </div>
    		<div class="logo logo-mini">
    			<a href="#" class="logo-text">
    				<!--<img src="<?= base_url();?>img/logo.png" alt="">-->
    			</a>
    		</div>

        	<div class="sidebar-wrapper">
    			<?= $menu; ?>
        	</div>
        </div>

        <div class="main-panel">
    		<nav class="navbar navbar-default">
    			<div class="container-fluid">
    				<div class="navbar-minimize">
    				</div>
    				<div class="navbar-header">
    					<button type="button" class="navbar-toggle" data-toggle="collapse">
    						<span class="sr-only">Toggle navigation</span>
    						<span class="icon-bar"></span>
    						<span class="icon-bar"></span>
    						<span class="icon-bar"></span>
    					</button>
    					<a class="navbar-brand" href="#">
    						<?= $pageTitle ?>
    					</a>
    				</div>
    			</div>
    		</nav>

    		<div class='content'>
    			<div class="container-fluid">
