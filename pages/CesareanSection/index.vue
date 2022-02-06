<template>
	<view class="content col-wrapper">
		<form class="form">
			<view class="uni-forms-item form-item row-wrapper">
				<view class="title form-title" style="margin-right: 10px;">孕妇本人生日</view>
				<uni-datetime-picker class="form-value" type="datetime" v-model="form.birthDay" />
			</view>
			<view class="uni-forms-item form-item row-wrapper">
				<view class="title">姓名</view>
				<input v-model="form.name" class="input form-value" placeholder="请输入姓名" />
			</view>
			<view class="uni-forms-item form-item">
				<view class="title">性别</view>
				<radio-group class="row-wrapper form-value">
					<label class="row-wrapper label">
						<radio :value="form.gender" :checked="form.gender===1" />
						<view>男</view>
					</label>
					<label class="row-wrapper">
						<radio :value="form.gender" :checked="form.gender===2" />
						<view>女</view>
					</label>
				</radio-group>
			</view>
			<view class="uni-forms-item form-item">
				<view class="title">阳历生日</view>
				<uni-datetime-picker class="form-value" type="datetime" v-model="form.birthDay" />
			</view>
			<view class="uni-forms-item form-item">
				<view class="title">出生地</view>
				<radio-group class="row-wrapper form-value">
					<label class="row-wrapper label">
						<radio :value="form.birthPlace" :checked="form.birthPlace===1" />
						<view>南半球</view>
					</label>
					<label class="row-wrapper">
						<radio :value="form.birthPlace" :checked="form.birthPlace===2" />
						<view>北半球</view>
					</label>
				</radio-group>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '取名字/测名字',
				form: {
					gender: 1, // 1- 男 2- 女
					birthDay: '',
					birthPlace: 1, // 1-南半球 2-北半球
					name: ''
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	.content {
		align-items: stretch;
		align-self: stretch;
		padding: 10px;

		.testName {
			justify-content: space-between;
			align-items: stretch;
		}

		.form {
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


	.label {
		margin-right: 10px;
	}
</style>
