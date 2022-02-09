<template>
	<view class="content col-wrapper">
		<!-- tab -->
		<uni-segmented-control :current="current" styleType='text' :values="items" @clickItem="e=>onClickItem(e)">
		</uni-segmented-control>
		<!-- 测名字 -->
		<view v-show="current ===0" class="testName col-wrapper">
			<uni-card title="系统说明">
				親手替自己的孩子取名，意義非凡。【劍靈姓名學命名系統】融合古典命理與現代觀念，提供六種專業的取名方法，幫你輕鬆取好名，相信一個好名字是送給寶寶最棒的生日禮物。
			</uni-card>
			<uni-card title="系统核心">
				<view class="row-wrapper">
					<image src="../../static/index/a.gif" class="image"></image>
					<view class="row-wrapper">
						<view class="col-wrapper item">
							<image class="image-title" src="../../static/index/title01.gif"/>
							<view>配合八字命格，補偏救弊</view>
						</view>
						<view class="col-wrapper item">
							<image class="image-title" src="../../static/index/title01.gif"/>
							<view>配合八字命格，補偏救弊</view>
						</view>
						<view class="col-wrapper item">
							<image class="image-title" src="../../static/index/title01.gif"/>
							<view>配合八字命格，補偏救弊</view>
						</view>
					</view>
				</view>
			</uni-card>
			<uni-card title="系统流程">
				<image src="../../static/index/liucheng.png"></image>
			</uni-card>
		</view>
		<!-- 起名字 -->
		<view v-show="current === 1" class="testName col-wrapper">
			<form class="form">
				<view class="uni-forms-item form-item">
					<view class="title form-title">鉴定方式</view>
					<view class="form-value">依八字、生肖、紫微斗數、熊崎氏姓名學，分析姓名吉凶。</view>
				</view>
				<view class="uni-forms-item form-item">
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
			<button @click="testName()" class="submit" type="primary">开始鉴定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '取名字/测名字',
				items: ['取名字', '测名字'],
				current: 0,
				currentTab: '取名字',
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
			/**
			 * @param {Object} e 参数
			 */
			onClickItem(e) {
				console.log(typeof(e.currentIndex))
				this.current = e.currentIndex
			},
			/**
			 * 提交
			 */
			testName() {
				uni.navigateTo({
					url:'/pages/index/result'
				})
			}
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

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.label {
		margin-right: 10px;
	}

	.submit {
		margin: 0;
	}
	.image{
		width: 80px;
		height: 80px;
	}
	.item{
		width: 70px;
		margin: 5px;
		.image-title{
			width: 100%;
			height: 20px;
		}
	}
</style>
