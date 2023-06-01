<template>
	<div class="order">
		<div class="serc">
			<el-input v-model="inpu" class="int" placeholder="请输入查询用户名" clearable @click="getList()" />
			<button type="button" class="sou" @click="sousuo()">搜索</button>
		</div>
		<div class="eltab">
			<el-table :data="uslist.slice((currentPage3-1)*pageSize3,currentPage3*pageSize3)" style="width: 100%">
				<el-table-column fixed prop="date" label="日期" fit sortable width="120" />
				<el-table-column prop="name" label="用户"  fit show-overflow-tooltip="true" />
				<el-table-column prop="phone" label="电话"  fit show-overflow-tooltip="true" />
				<el-table-column prop="shopName" label="商品"  fit show-overflow-tooltip="true" />
				<el-table-column prop="shopnumber" label="数量"  fit show-overflow-tooltip="true" />
				<el-table-column prop="price" label="单价"  fit show-overflow-tooltip="true" />
				<el-table-column prop="TotalPrice" label="总价"  fit  show-overflow-tooltip="true"/>
				<el-table-column prop="state" label="状态" fit show-overflow-tooltip="true"/>
				<el-table-column prop="shipments" label="发货"  fit show-overflow-tooltip="true" />
				<el-table-column prop="address" label="地址" fit show-overflow-tooltip="true" />
				<el-table-column prop="zip" label="邮编"  fit show-overflow-tooltip="true" />
				<el-table-column fixed="right" label="操作"  width="100 ">
					<template #default="scope">
						<el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
							删除
						</el-button>
						<el-button link type="primary" size="small" @click="handleEdit(scope.row)">
							修改
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 修改弹框 -->
			<el-dialog v-model="dialogFormVisible" title="修改">
				<el-form :model="form">
					<el-form-item label="日期" :label-width="100">
						<el-input v-model="form.value.date" autocomplete="off" />
					</el-form-item>
					<el-form-item label="用户" :label-width="100">
						<el-input v-model="form.value.name" autocomplete="off" />
					</el-form-item>
					<el-form-item label="电话" :label-width="100">
						<el-input v-model="form.value.phone" autocomplete="off" />
					</el-form-item>
					<el-form-item label="商品" :label-width="100">
						<el-input v-model="form.value.shopName" autocomplete="off" />
				 </el-form-item>
					<el-form-item label="数量" :label-width="100">
				  <el-input v-model="form.value.shopnumber" autocomplete="off" />
					</el-form-item>
					<el-form-item label="单价" :label-width="100">
						<el-input v-model="form.value.price" autocomplete="off" />
					</el-form-item>
					<el-form-item label="总价" :label-width="100">
						<el-input v-model="form.value.TotalPrice" autocomplete="off" />
					</el-form-item>
					<el-form-item label="状态" :label-width="100">
						<el-input v-model="form.value.state" autocomplete="off" />
					</el-form-item>
					<el-form-item label="发货" :label-width="100">
						<el-input v-model="form.value.shipments" autocomplete="off" />
					</el-form-item>
					<el-form-item label="地址" :label-width="100">
						<el-input v-model="form.value.address" autocomplete="off" />
					</el-form-item>
					<el-form-item label="邮编" :label-width="100">
						<el-input v-model="form.value.zip" autocomplete="off" />
					</el-form-item>

				</el-form>
				<template #footer>
					<span class="dialog-footer">
						<el-button @click="dialogFormVisible = false">Cancel/关闭</el-button>
						<el-button type="primary" @click="dialogFormVisible = false">
			 			Confirm/确认
			 		</el-button>
					</span>
				</template>
			</el-dialog>
			<!-- 分页 -->
			<div class="demo-pagination-block">
				<el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small"
					:disabled="disabled" :background="background" layout="prev, pager, next, jumper"
					:total="uslist.length" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {
		ref,
		map,
		watch,
		onBeforeMount,
		reactive
	} from 'vue'
	import dayjs from 'dayjs'
	const uslist = ref([]);
	const now = new Date()
	const tableData = ref([{
			date: '2016-05-01',
			name: 'Tom',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-02',
			name: '张三',
			phone: '2151656561',
			shopName: '商品3',
			address: '四川省成都市郫都区图结路',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-03',
			name: '李四',
			phone: '123456798',
			shopName: '商品2',
			address: '四川省成都市郫都区解放小区',
			state: '已付款',

			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-04',
			name: '王五',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-05',
			name: '武城',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-05',
			name: '显示',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-08',
			name: '发布',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-09',
			name: '吃饭的吧',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-07',
			name: '啥菜',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-08',
			name: '触发',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		},
		{
			date: '2016-05-15',
			name: '不同',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		}, {
			date: '2016-05-25',
			name: '定位',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		}, {
			date: '2016-08-01',
			name: 'Tom',
			phone: '21356463',
			shopName: '商品1',
			address: '四川省成都市郫都区',
			state: '已付款',
			shipments: '未发货',
			shopnumber: '3',
			price: '￥299',
			zip: 'CA 90036',
			TotalPrice: '954'
		}
	])
	const form = reactive({
		date: '',
		name: '',
		phone: '',
		shopName: '',
		address: '',
		state: '',
		shipments: '',
		shopnumber: '',
		price: '',
		zip: '',
		TotalPrice: ''
	})
	onBeforeMount(() => {
		getList()
	})

	const dialogFormVisible = ref(false)


// 删除
	const deleteRow = (index: number) => {
		uslist.value.splice(index, 1)
	}
	// 修改
	const handleEdit = (row) => {
		dialogFormVisible.value = true
		form.value = row
	}

	// const onAddItem = () => {
	//   now.setDate(now.getDate() + 1)
	//   tableData.value.push({
	//     date: dayjs(now).format('YYYY-MM-DD'),
	//     name: 'Tom',
	//     phone: '123456798',
	//     shopName: '商品2',
	//     address: '四川省成都市郫都区解放小区',
	//     state:'已付款',
	//     zip: 'CA 90036',
	//   })
	// }
// 分页
	const currentPage3 = ref(1)
	const currpage = ref(1)
	const pageSize3 = ref(10)
	const small = ref(false)
	const background = ref(false)
	const disabled = ref(false)
	let i = 0;
	const handleSizeChange = (val: number) => {
		// console.log(`${val} items per page`)
		pageSize3.value = val
	}
	const handleCurrentChange = (val: number) => {
		// console.log(`current page: ${val}`)
		currentPage3.value = val
	}
	
// 搜索
const inpu = ref('')
	const arr = ref([])
	const sousuo = () => {
		if (inpu.value !== '') {
			arr.value = uslist.value.filter(item => item.name.indexOf(inpu.value) !== -1)
			if (arr.value) {
				uslist.value = arr.value
			}
		}

	}
	watch(inpu, (newName, oldName) => {
		if (newName == '') {
			getList()
		}
	})

	const getList = () => {
		uslist.value = tableData.value
	}
	
</script>

<style type="text/css">
	* {
		margin: 0;
		padding: 0;
	}

	.order {
		width: 100%;
		height:auto;
		margin: 10% auto;
		border: #C45656 5px solid;
		/* background: url(../assets/bgc_1.jpg); */
	/* 	background-size: 100%;
		background-repeat: no-repeat; */
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.serc {
		width: 60%;
		height: auto;
		margin: 20px 0px 80px 0px;
	}

	.int {
		width: 600px;
		height: 40px;
	}

	.sou {
		width: 50px;
		height: 40px;
	}

	.xaing {
		width: 80%;
		height: auto;
		margin: auto 0;
		background: red;
	}

	.demo-pagination-block+.demo-pagination-block {
		margin-bottom: 0;
		/* border: #529B2E solid 2px !important; */
	}

	.demo-pagination-block {
		/* position: absolute; */
		/* bottom: 10px; */
		margin:15px auto 0;

		/* margin: 10%; */
	}

	.eltab {
		border: #529B2E 2px solid;
		/* height:  !important; */
	
	}

	.el-input {
		width: 80%;
	}

	.dialog-footer button:first-child {
		margin-right: 10px;
	}
</style>
