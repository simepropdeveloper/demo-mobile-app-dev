<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>Sime Darby - Cinema Apps</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="#">
        <link rel="stylesheet" href="{{ URL::asset('prime-asset.css') }}">
    </head>

    <body class="flex align-items-center justify-content-center surface-0">

        <div id="app" class="surface-0 apps-wrapper shadow-6"></div>

        <script type="application/javascript" src="{{ URL::asset('app.js') }}?12"></script>
    </body>
</html>
