<template>
	<view class="col-wrapper content">
		<view v-if="type===1">
			<uni-nav-bar shadow title="导航栏组件">ssss</uni-nav-bar>
			<uni-nav-bar shadow title="导航栏组件"></uni-nav-bar>
		</view>
		<view v-else></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '取名/改名',
				type: 1
			}
		},
		mounted() {
			console.log(this.$route.query)
			this.title = this.$route.query.type === 'rename' ? '取名/改名' : '测名字'
			this.type = this.$route.query.type === 'rename' ? 1 : 2
		}
	}
</script>

<style lang="less" scoped>
	.content {}
</style>
