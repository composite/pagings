/*!************************************************************************************
 * Pagings 0.1.0
 * by composite (ukjinplant@msn.com)
 * http://hazard.kr
 * This project licensed under a MIT License.
 **************************************************************************************/;
!function(U){
	'use strict';
	//default properties.
	var a=/a/i,defs={
		item:'a',next:'[&gt;{5}]',prev:'[{4}&lt;]',format:'[{0}]',
		itemClass:'pagings-item',sideClass:'pagings-side',className:'pagings-area',
		itemCurrent:'selected',length:10,max:1,current:1,append:false
		,href:'#{0}',event:true,first:'[1&lt;&lt;]',last:'[&gt;&gt;{6}]',
		onclick:null,onprev:null,onnext:null,onitem:null
	},format=function(str){
		var arg=arguments;
		return str.replace(/\{(\d+)}/g,function(m,d){
			if(+d<0) return m;
			else return arg[+d+1]||"";
		});
	},isF = function(f){
		return f && (typeof f === 'function' || f.constructor === Function);
	},item,make=function(op,page,cls,str){
		item=document.createElement(op.item);
		item.className=cls;
		item.innerHTML=format(str,page,op.length,op.start,op.end,op.start-1,op.end+1,op.max);
		if(a.test(op.item)) item.href=format(op.href,page);
		if(op.event){
			item.addEventListener('click',function(e){
				var fired=true;
				if(isF(op.onclick)) fired=op.onclick.call(item,e,page,op);
				if(fired==undefined||fired)
					Paging(op.origin, {current:page});
				return fired;
			});
			op.origin.appendChild(item);
			//bind event for each elements.
			var ev='on';
			switch(str){
				case op.prev:ev+='prev';break;
				case op.next:ev+='next';break;
				case op.first:ev+='first';break;
				case op.last:ev+='last';break;
				default:ev+='item';break;
			}
			if(isF(op[ev])) op[ev].call(item,page,op);
		}
		return item;
	}, e2a = function(el, fn){
		var els = typeof el.length === 'number' && typeof e.item !== 'undefined' ? [].concat.call(el) : [el];
		for(var i=0,len=els.length; i<len; i++){
			if(!els[i] || els[i].nodeType !== 1) continue;
			if(isF(fn)) fn.call(els[i], i);
		}
		return els;
	}, str = {
		trim: function(s){
			return String(s).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		},
		rxesc: function(s){
			return String(s).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		}
	}, cls = {
		add: function(el, c){
			var a = String(el.className).split(/\s+/);
			a.push(c);
			el.className = a.join(' ');
			return el;
		},
		del: function(el, c){
			el.className = str.trim(el.className.replace(new RegExp('\\b' + str.rxesc(c) + '\\b'), ''));
			return el;
		}
	}

	var Paging = function(el, op){
		op = op || {};
		e2a(el, function(){
			var o = {origin: this};
			for(var n in defs) o[n] = op[n] || (this.__PAGING ? this.__PAGING[n] : defs[n]);
			cls.add(this, o.className).innerHTML = '';
			if(o.max<1) o.max=1; if(o.current<1) o.current=1;
			o.start=~~((o.current-1)/o.length)*o.length+1;
			o.end=o.start-1+o.length;
			if(o.end>o.max) o.end=o.max;
			if(o.current>o.length){
				if(o.first!==false) make(o,1,o.sideClass,o.first);//first button
				make(o,o.start-1,o.sideClass,o.prev);//prev button
			}
			//pages button
			for(var i=o.start;i<=o.end;i++)
				make(o,i,o.itemClass+(i==o.current?' '+o.itemCurrent:''),o.format);

			if(o.current/o.length<o.max/o.length){
				if(o.end<o.max) make(o,o.end+1,o.sideClass,o.next);//next button
				if(o.last!==false) make(o,o.max,o.sideClass,o.last);//last button
			}
			this.__PAGING=o;
		});
		return el;
	};
	Paging.destroy = function(el){
		e2a(el, function(){
			if(this.__PAGING){
				cls.del(this, this.__PAGING.className).innerHTML = '';
				if(!(delete this.__PAGING)) this.__PAGING = U;
			}
		});
		return el;
	};

	window.Paging = Paging;
	if('HTMLElement' in window && !('paging' in HTMLElement.prototype)){
		HTMLElement.prototype.paging = function(op){return Paging(this, op);};
		HTMLElement.prototype.paging.destroy = function(op){return Paging.destroy(this);};
	}

}(undefined);
