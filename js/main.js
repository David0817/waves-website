$("#slidershow").carousel({
    interval: 5000 // in milliseconds
});
$("#slidershow1").carousel({
    interval: 5000 // in milliseconds
});
// 企业级区块链产品服务体系
$(".isActive").click('on', function() {
    var _this = $(this);
    $(this).addClass('rhombic').siblings().removeClass('rhombic').children().removeClass('active');
    var _id = _this.attr('data');
    $(_id).show().siblings().hide();
    _this.children().addClass('active');
});
// 技术特征
$(".btn_technical_features").click('on', function() {
    var _this = $(this);
    $(this).addClass('rhombic').siblings().removeClass('rhombic').children().removeClass('current');
    var _id = _this.attr('data');
    $(_id).show().siblings().hide();
    _this.children().addClass('current');
});
// 赋能实体经济的区块链解决方案
$(".btn_solution").click('on', function() {
    var _this = $(this);
    $(this).addClass('rhombic').siblings().removeClass('rhombic').children().removeClass('current');
    var _id = _this.attr('data');
    $(_id).show().siblings().hide();
    _this.children().addClass('current');
});
$(".solution_m_title").click('on',function(){
	$(this).next().toggle();
});

// $(".tech_m_item_title").click('on',function(){
// 	$(this).next().toggle();
// });
$(".service_m_title").click('on',function(){
    $(this).next().toggle();
});