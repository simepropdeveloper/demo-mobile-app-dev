<!-- Dashboard CSS -->
<link href="<?= base_url() ?>assets/css/style.css" type="text/css" rel="stylesheet" >
<style>
.property .overlay{
    bottom: 0px;
}

.property .property-image{
    height: 240px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.property .overlay .additional-info li, .property:active .overlay .additional-info li, .property:focus .overlay .additional-info li{
    opacity: 1;
}

a.disabled {
    pointer-events: none;
}
</style>
<div class="page-slider">
    <div id="page-content">
        <section id="admin" class="block">
            <div class="container">
                <header class="section-title">
                    <h2><?= $admin_uid ?></h2>
                </header>
                <div class="row">
                    <div class="col-md-3 col-sm-3">
                        <div class="property">
                            <a href="<?= base_url()?>dashboard/entry" >
                                <div class="property-image" style="padding:25px;background-image: url(<?= base_url().'assets/img/icon1.svg'?>);background-origin:content-box;">
                                </div>
                                <div class="overlay">
                                    <div class="info">
                                        <h3><?= lang('visitorentry') ?></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="property">
                            <a href="<?= base_url()?>dashboard/visitor" >
                                <div class="property-image" style="padding:25px;background-image: url(<?= base_url().'assets/img/icon2.svg'?>);background-origin:content-box;">
                                </div>
                                <div class="overlay">
                                    <div class="info">
                                        <h3><?= lang('myvisitor') ?></h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="property">
                            <a href="<?= base_url()?>dashboard" >
                                <div class="property-image" style="padding:25px;background-image: url(<?= base_url().'assets/img/icon3.svg'?>);background-origin:content-box;">
                                </div>
                                <div class="overlay">
                                    <div class="info">
                                        <h3>Pay Bills</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="property">
                            <a href="<?= base_url()?>dashboard" >
                                <div class="property-image" style="padding:25px;background-image: url(<?= base_url().'assets/img/icon4.svg'?>);background-origin:content-box;">
                                </div>
                                <div class="overlay">
                                    <div class="info">
                                        <h3>Notifications</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="new-properties" class="block">
            <div class="container">
                <header class="section-title">
                    <h2>Properties</h2>
                    <a href="<?= base_url() ?>property" class="link-arrow">More</a>
                </header>
                <div class="row">
                    <?php for($i = 0 ; $i < 3; $i++) { ?>
                        <div class="col-md-4 col-sm-6">
                            <div class="property">
                                <a href="<?= base_url()?>dashboard/property" >
                                    <div class="property-image" style="background-image: url(<?= base_url().'assets/img/property.jpg'?>)">
                                    </div>
                                    <div class="overlay">
                                        <div class="info">
                                            <h3>House A</h3>
                                            <figure>
        										Project A
        									</figure>
                                        </div>
                                        <ul class="additional-info">
                                            <li>
                                                <header>Beds</header>
                                                <figure>3</figure>
                                            </li>
                                            <li>
                                                <header>Baths</header>
                                                <figure>2</figure>
                                            </li>
                                            <li>
                                                <header>Balcony</header>
                                                <figure>1</figure>
                                            </li>
                                            <li>
                                                <header>Area</header>
                                                <figure class='area_toggle'><span>1366</span> <small>sqft</small></figure>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </section>
        <section id="new-announcement" class="block">
            <div class="container">
                <header class="section-title">
                    <h2>Annoucement</h2>
                    <a href="<?= base_url() ?>" class="link-arrow">More</a>
                </header>
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="property">
                            <a href="<?= base_url()?>" >
                                <div class="property-image" style="background-image: url(<?= base_url().'assets/img/newyear.png'?>)">
                                </div>
                                <div class="overlay">
                                    <div class="info">
                                        <h3>Happy Chinese New Year</h3>
                                    </div>
                                    <ul class="additional-info">
                                        <li>
                                            <header>Find out more</header>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
