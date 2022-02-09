<template>
	<view class="content col-wrapper">
		<form class="form">
			<view class="uni-forms-item form-item">
				<view class="title form-title">手机号码</view>
				<input v-model="form.mobile" class="input form-value" placeholder="请输入手机号码" />
			</view>
		</form>
		<button @click="testName()" class="submit" type="primary">开始鉴定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '取名字/测名字',
				form: {
					mobile: undefined
				}
			}
		},
		onLoad() {

		},
		methods: {
			testName() {
				uni.navigateTo({
					url: '/pages/test/result?mobile=' + this.form.mobile
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		padding: 10px;
		align-items: stretch;

		.submit {
			align-self: stretch;
			margin: 0;
		}

		.form {
			align-self: stretch;
			margin: 10px 0;

			.form-item {
				margin-top: 5px;

				.input {
					border: 1px solid #dcdfe6;
					height: 40px;
					border-radius: 4px;
					padding: 0 9px;
				}

				.form-value {
					margin-top: 5px;
				}
			}
		}
	}


	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
