// event pada saat link di klik
$('.page-scroll').on('clik', function(e){

	//ambill isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	//pindah scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top
	},1250, 'swing');

	e.preventDefault();
})