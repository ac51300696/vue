<template>
<div>
	<div class="showbar">
		<div class="cover-image"></div>
		<div class="text" style="text-shadow:1px 1px 1px #000000">
			<h1>简书</h1>
			<h3>交流故事，沟通想法</h3>
			<p>一个基于内容分享的社区</p>
			<a href="#"><i class="fa fa-home"></i>提笔写篇文章</a>
		</div>
	</div>
	<div class="article-page">
		<nav>
			<span class="nav-text fir"><a href="#">发现</a></span>
			<span class="nav-text"><a v-link="'../bonus'">2015精选</a></span>
			<span class="search clearfloat">
				<span class="input">
					<input type="search" placeholder="搜索">
				</span>
				<span class="search-icon"><i class="fa fa-search"></i></span>
			</span>
		</nav>
		<div class="article-list">
			<ul class="btn-group"  >
			
				<li v-for="item in show.list" :class="{active: show.active === item.type}">
					<a @click="displayArticle(item.type)"
					   v-link="'/home/article'"
					>{{item.text}}</a>
					</li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</div>
</template>
<style>
	.btn-group{
		margin-left: 15px;
		margin-top:20px;
	}
	.btn-group li{
		margin: 5px 5px;
	}
	.btn-group .active{
		background-color: #de533a;
	}
	.btn-group .active a{
		color: #ffffff;
	}
	.btn-group li{
		margin: 0 5px;
		display: inline-block;
		padding: 5px 10px;
		border: 1px solid #d9d9d9;
		border-radius: 10px;
	}
</style>
<script>
import { displayArticle} from '../vuex/actions'
import { getShow } from '../vuex/getters'
export default{
	vuex: {
		getters: {
			show: getShow
		},
		actions: {
			displayArticle
		}
	}
}
</script>
