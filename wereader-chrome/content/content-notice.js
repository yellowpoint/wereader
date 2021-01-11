/*通知为导入书籍时的注意点*/

//console.log("content-notice.js：被注入")
var interval_notice = setInterval(() => {
    //如果页面不再显示正在加载（确保页面加载完毕）
    if (document.getElementsByClassName("readerChapterContentLoading").length == 0) {
        /* 不直接在inject-bid.js中通知是因为inject-bid.js在导入书籍页会分别在两个时间点被注入，最终导致通知两次 */
        //为导入书籍
		let list = document.getElementsByClassName("wr_bookCover_img").item(0).src.split("/")
		let bid = list[list.length - 2]
		if(bid == "wrepub"){
			Swal.fire({
				title:"导入书籍", 
				html:"<p align=left>检测到该书为导入书籍，如无法正常导出内容，请刷新页面后重试~</p>",
				confirmButtonText: 'OK'
			})
        }
        //结束定时器
        clearInterval(interval_notice)
    }
},2000)