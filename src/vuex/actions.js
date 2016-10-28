export const displayArticle = ({ dispatch },show) => {
	$.ajax({
    url: '/my',
    dataType: 'json',
    success: function(data, status, jqXHR) {
        console.log(data)
         dispatch(DISPLAY_ARTICLE, data);
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