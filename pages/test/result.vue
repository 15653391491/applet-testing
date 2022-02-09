<template>
	<view class="col-wrapper content">
		<uni-card title="手机号码吉凶查询">
			您输入的手机号码：{{mobile}}<br />
			数理：51<br />
			吉凶：一盛一衰，浮沉不常，自重自处，可保平安 吉带凶
		</uni-card>
		<uni-card title="手机号码测吉凶：性格、爱情、财运">
			您的手机号码：{{mobile}}<br/>
			爱情：懂得照顾别人，体谅恋人的感受，处处关怀对方，不过体弱多病的你，却叫情人担心不已。<br/>
			财运：你是一个非常吝啬的人，凡事悭得就悭，家中的钱罂当然「常满」。<br/>
			最有缘灵数：6<br/>
			五行：木<br/>
			幸运手机饰物：陶瓷小猪公仔
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: ''
			}
		},
		onLoad() {
			// this.mobile = this.$route.query.mobile
			let curPage = getCurrentPages()
			let params = curPage[curPage.length - 1].options
			this.mobile = params.mobile
		}
	}
</script>

<style scoped lang="less">
	.content {}
</style>
