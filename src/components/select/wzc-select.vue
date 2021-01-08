<template>
    <div id="wzc_select">
        <div id="select_module">
			<div class="divSelect">
				<div class="divSelectinput">
					<!-- 选中后的内容 -->
					<div class="selectinfos" :title="selectedTitle"> {{ selectedTitle }} </div>
					<!-- 三角形图标 -->
					<div class="imgthree"></div>
				</div>
                <!-- 下拉框列表 -->
				<div class="Selectlist" v-show="false">
					<ul>
						<!-- <li v-for="(item, index) in Files" :key="item.value" @click="changeSelect(item.FileName)">
							{{ item.FileName }}
						</li> -->
					</ul>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    name:'wzc_select',
    components: {},
    props: {},
    data() {
        return {
            selectedTitle: '请选择'
        };
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {},
};
</script>
<style scoped>

</style>