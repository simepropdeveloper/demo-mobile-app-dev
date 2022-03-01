<div class="user">
	<div class="photo">
		<img src="<?= base_url(); ?>assets/img/avatar.png" />
	</div>
	<div class="info">
		<a data-toggle="collapse" href="#collapseExample" class="collapsed">
			<?= $admin_uid ?>
		</a>
	</div>
</div>

<ul class="page-sidebar-menu nav">
    <li>
		<a href="<?= base_url(); ?>dashboard">
			<i class="pe-7s-menu"></i>
			<p><?= lang('dashboard') ?></p>
		</a>
	</li>
	<li>
		<a href="<?= base_url(); ?>dashboard/property">
			<i class="pe-7s-home"></i>
			<p><?= lang('properties') ?></p>
		</a>
	</li>
	<li>
		<a href="<?= base_url(); ?>dashboard/entry">
			<i class="pe-7s-date"></i>
			<p><?= lang('visitorentry') ?></p>
		</a>
	</li>
	<li>
		<a href="<?= base_url(); ?>dashboard/visitor">
			<i class="pe-7s-users"></i>
			<p><?= lang('myvisitor') ?></p>
		</a>
	</li>
</ul>
