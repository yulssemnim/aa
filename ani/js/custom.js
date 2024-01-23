$(function () {
   $('.bg_img .pic1 .frame').click(function () {
      $('.bg_img .pic1').toggleClass('right')
   })
   $('.bg_img .pic2 .frame').click(function () {
      $('.bg_img .pic2').toggleClass('left')
      $('.talk').fadeToggle()
   })
   $('.click span').click(function () {
      $('.notice').fadeIn()
   })
   $('.notice .notice_inner .contents i').click(function () {
      $('.notice').fadeOut()
   })

   /* 서브 쿵야 유전자 조작 실험 */



   $('.operation .btn_all').click(function () {
      let i = $(this).index();
      $('.project_2 .kong_ya .option_all .option').eq(i).fadeIn(1000).siblings().hide()

   })
   $('.option_all .op_1').hover(function () {
      $('main .project_2 .machine .kong_ya .op_1_talk').fadeIn(this)
      $('main .project_2 .machine .kong_ya .fear').fadeIn(this)
   }, function () {
      $('main .project_2 .machine .kong_ya .op_1_talk').fadeOut(this)
      $('main .project_2 .machine .kong_ya .fear').fadeOut(this)

   })

   /* 구운 양파 실험 클릭 */
   $('main .project_3 .pro_top').click(function () {
      $('main .project_3 .sun_light').fadeToggle()
      $('main .project_3 .pro_bottom  .after').fadeIn(3000).siblings().fadeOut(2000)
   })


   /* 실험 보고서 */
   $('main .project_result .txt_box p').click(function(){
      $('.modal').fadeIn()
   });
   $('.modal .inner .inner_bg i').click(function(){
      $('.modal').fadeOut()})
  
       //실험보고서 말풍선
       $('.modal .inner .rice_balls').click(function(){
         $(this).find('.talk').fadeToggle()
       })
       $('.modal .inner .onion').click(function(){
         $(this).find('.talk').fadeToggle()
       })
})