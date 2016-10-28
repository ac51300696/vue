 var Mock = require('mockjs')
      Mock.mock(/\/my/, {
        'active':"hot",
       'articles':[
		{
			'author':'徐丹妮111111',
			'title':'我不是学霸，只是比你努力一点而已',
			'time':'大约6小时之前',
			'read':'8498',
			'comment':'248',
			'like':'2342',
			'pay':'2',
			'src':'url(../../static/vue-demo-hot.jpg)'
		},
		{
			'author':'徐妮',
			'title':'我不是学霸，只是比你努力一点而已',
			'time':'大约6小时之前',
			'read':'8498',
			'comment':'248',
			'like':'2342',
			'pay':'2',
			'src':'url(../../static/vue-demo-hot.jpg)'
		},
		 {
			'author':'徐双妮',
			'title':'我不是学霸，只是比你努力一点而已',
			'time':'大约6小时之前',
			'read':'8498',
			'comment':'248',
			'like':'2342',
			'pay':'2',
			'src':'url(../../static/vue-demo-hot.jpg)'
		}
	]
});
export const displayArticle = ({ dispatch },show) => {
	$.ajax({
    url: '/my',
    dataType: 'json',
    success: function(data, status, jqXHR) {
    	// console.log(dispatch())
    		data.active= show
         	dispatch("DISPLAY_ARTICLE", data);
    }
});
	  // Vue.$http.jsonp('/my')
   //      .then(function(response){
   //      	console.log(response) 
           
   //      });
	// dispatch('DISPLAY_ARTICLE',show)
}

export const displayTopic = ({ dispatch },show) => {
	dispatch('DISPLAY_TOPIC',show)
} 

export const sortContent = ({ dispatch },method) => {
	dispatch('SORTCONTENT',method)
}
export const changeLogin = ({ dispatch },loginway) => {
	dispatch('CHANGELOGIN',loginway)
}