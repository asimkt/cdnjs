(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function o(t){return t}function s(t){return t}function i(){c=!0,a=t[n]._c,f=t[n]._d,r=t[n]._e,a.add("fixed-top fixed-bottom"),d=t[n].glbl}var n="mmenu",e="fixedElements";t[n].prototype["_init_"+e]=function(){if(this.opts.offCanvas){c||i();var n=this.vars[e+"_added"];if(this.vars[e+"_added"]=!0,n||(this.opts[e]=o(this.opts[e]),this.conf[e]=s(this.conf[e])),this.opts[e],this.conf[e],this.__refactorClass(t("div",d.$page),this.conf.classNames[e].fixedTop,"fixed-top"),this.__refactorClass(t("div",d.$page),this.conf.classNames[e].fixedBottom,"fixed-bottom"),!n){var f,p;this.$menu.on(r.opening,function(){var o=t(window).scrollTop(),s=d.$page.height()-o-d.$wndw.height();f=t("."+a["fixed-top"]),p=t("."+a["fixed-bottom"]),f.css({"-webkit-transform":"translateY( "+o+"px )",transform:"translateY( "+o+"px )"}),p.css({"-webkit-transform":"translateY( -"+s+"px )",transform:"translateY( -"+s+"px )"})}).on(r.closed,function(){f.add(p).css({"-webkit-transform":"none",transform:"none"})})}}},t[n].addons.push(e),t[n].defaults[e]={},t[n].configuration.classNames[e]={fixedTop:"FixedTop",fixedBottom:"FixedBottom"};var a,f,r,d,c=!1}(jQuery);
}));