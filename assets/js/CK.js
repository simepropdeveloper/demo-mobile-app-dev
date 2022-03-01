var CK = {
    Model: {
		create: function(table, data, callback, elem){
			url = b_url+"ajax/create/"+table;
			CK.Ajax.post(url, data, callback, elem);
		},
		get: function(table, id, callback, elem){
			url = b_url+"ajax/get/"+table+"/"+id;
			CK.Ajax.post(url, {}, callback, elem);
		},
		find: function(table, data, callback, elem){
			url = b_url+"ajax/find/"+table;
			CK.Ajax.post(url, data, callback, elem);
		},
		update: function(table, id, data, callback, elem){
			url = b_url+"ajax/update/"+table+"/"+id;
			CK.Ajax.post(url, data, callback, elem);
		},
		delete: function(table, id, callback, elem){
			url = b_url+"ajax/delete/"+table+"/"+id;
			CK.Ajax.post(url, id, callback, elem);
		}
    },
	Ajax: {
		post : function(url, data, callback, elem){
			elem = CK.UI.startSpinning(elem);
			$.post(url, data, function(resp){
		        callback(resp);
		    },"json").fail(function(err) {
			    if(err.responseText != undefined){
					if(err.responseText == ''){
						CK.UI.error(msg_errorInternetCon3);
					} else if(url.indexOf('ajax/errlog') < 0) {
						CK.Server.run('ajax/errlog', {
							user_agent: navigator.userAgent,
							curr_url: window.location.pathname,
							api_url: url,
							data: JSON.stringify(data),
							server_respond: $(err.responseText).text()
						}, function(resp){}, '');
					}
					CK.UI.error(msg_errorContactAdmin);
				} else if(err.status == 0){
					CK.UI.error(msg_errorInternetCon4);
				}
			})
			.always(function() {
				CK.UI.stopSpinning(elem);
			});
		}
	},
    Server:{
        run: function(url, data, callback, elem){
			if (data instanceof FormData) {
				elem = CK.UI.startSpinning(elem);
				$.ajax({
					url : b_url+url,
					type : 'POST',
					data : data,
					dataType: 'json',
					processData: false,
					contentType: false,
					success : function(resp) {
						CK.UI.stopSpinning(elem);
						callback(resp);
					},
					error : function(err, textStatus, errorThrown){
						CK.UI.stopSpinning(elem);
						var msg = err.responseText;
						if(msg != undefined){
							if(msg == ''){
                                console.log(errorThrown);
								CK.UI.error(msg_errorInternetCon1);
							} else {
								if(url.indexOf('ajax/errlog') < 0) {
									CK.Server.run('ajax/errlog', {
										user_agent: navigator.userAgent,
										curr_url: window.location.pathname,
										api_url: url,
										data: JSON.stringify(data),
										server_respond: $(msg).text()
									}, function(resp){}, '');
								}
								CK.UI.error(msg_errorContactAdmin);
							}
						} else if(err.status == 0){
							CK.UI.error(msg_errorInternetCon2);
						}
					}
				});
			} else {
				url = b_url+url;
				CK.Ajax.post(url, data, callback, elem);
			}
		}
    },
    UI:{
        startSpinning : function(elem){
			elem = elem || '';
			elem = $(elem);
			if(elem != undefined){
				if(elem.is('form')){
					elem = elem.find('.btn-submit');
				} else if(elem.hasClass('btn')){
					elem = elem;
				} else {
					elem = $();
				}
			}
			elem.addClass('ui_spinning');
			elem.css('pointer-events', 'none');

			return elem;
		},
        stopSpinning : function (elem) {
			elem.removeClass('ui_spinning');
			elem.css('pointer-events', 'auto');
		},
		success: function (msg) {
			$.notify({
				icon: 'pe-7s-check',
				title: msg,
				message: '',
			},{
				element: 'body',
				type: "success",
				allow_dismiss: true,
				newest_on_top: false,
				placement: {
					from: "top",
					align: "right"
				}
			});
		},
		error: function (msg) {
			$.notify({
				icon: 'pe-7s-close-circle',
				title: msg,
				message: '',
			},{
				element: 'body',
				type: "danger",
				allow_dismiss: true,
				newest_on_top: false,
				placement: {
					from: "top",
					align: "right"
				}
			});
		}
    },
    Util:{
        handleResp: function(resp, func, func2){
			if(resp.status == 1){
				if(func !== undefined){
					func(resp);
				} else {
					location.reload();
				}
			}
			else if(resp.status == -1){
				if(func2 !== undefined){
					func2(resp);
				} else {
					CK.UI.error(resp.msg);
				}
			} else {
				CK.UI.error('Error');
			}
		},
    },
	ajaxErrCount: 0
}
