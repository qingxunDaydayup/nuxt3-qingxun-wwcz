<template>
    <div class="article-list-container">
        <!-- <button @click="logTagNow">logTagNow</button> -->
        <!-- <button @click="refreshShowArticleArr">refreshShowArticleArr</button> -->
        <section class="article-section" v-for="item in showArticleArr" :key="item.id" @click="routego(item.id)">
            <div>
                <div class="article-firstline">{{ item.userName }} | {{ item.publishDatetime }}</div>
                <div class="article-title">{{ item.title }} </div>
                <div class="article-description"><small>{{ item.description }}</small></div>
                <div class="article-pic"></div>
                <div class="article-endline"></div>
            </div>
        </section>
    </div>
</template>

<style>
.article-list-container {
    background-color: var(--block-bgc);
}

.article-section {
    padding: 0 2% 0;

}

.article-section:hover {
    cursor: pointer;
    background-color: var(--block-active-bgc);
}

.article-section > div {
    padding-top: 1rem;
    border-bottom: 1px solid var(--bgc);

    display: grid;
    grid-template-rows: 4;
    grid-template-columns: 2;
    gap: 5px;
    grid-template-areas: 
        "startline startline"
        "title pic"
        "description pic"
        "endline endline"
    ;
}

.article-firstline {
    grid-area: startline;
}
.article-title {
    grid-area: title;
    color: var(--title-color);
    font-size: 1.2rem;
    font-weight: 800;
}
.article-description {
    grid-area: description;
    height: 2rem;
    overflow: hidden;
}


</style>

<script setup>
useSeoMeta({
    title: "掘金-仿制首页",
    location: "掘金-太阳系",
    description: "这是一个由青训营-未完成组仿制的掘金首页"
})
const {data:res} = await useAsyncData(
    "fetchAriticleList",
    () => $fetch(getFullUrl("/api/qx-articles", ["qx_user"]))
);
const articleArr = [];
// const theUsefulData = res.value.data;
// console.log("theUserfullData", theUsefulData);
// console.log("res", res);
res.value.data.forEach(element => {
    // console.log(element);
    let newItem = {
        id: element.id | null,
        title: element.attributes.title,
        publishDatetime: dateTimeStrapiToDate(element.attributes.publishDatetime),
        description: element.attributes.description,
        userId: element.attributes.qx_user.data.id, 
        userName: element.attributes.qx_user.data.attributes.username,
    };
    articleArr.push(newItem);
});

const tagNow = useTagNow()

// // 根据tag来选择展示的文章内容。
const getShowArticleArrByTag = (originList, tagNow) => {
    // 未选定tag时直接返回
    let newShowArr = [];
    if(tagNow.value == null || tagNow == null || tagNow == undefined) {
        newShowArr = [...originList]
        console.log("newShowArr", newShowArr);
        return newShowArr;
    }
    let tag = [...tagNow.value.relateArticles.data];
    console.log("--------tag", tag);
    const articleIdArr = [];

    tag.forEach( item => {
        articleIdArr.push(item.id);
    })
    originList.forEach( item => {
        if( articleIdArr.indexOf(item.id) != -1) {
            newShowArr.push(item);
        }
    })
    console.log("newShowArr", newShowArr);
    return newShowArr;
    // tag.value.relateArticles 参考
    // {
    //     "data": [
    //         {
    //             "id": 2,
    //             "attributes": {
    //                 "title": " study typescript - 入门",
    //                 "description": "typescript入门小教学",
    //                 "content": "# study typescript - 入门\n\nsrc https://www.bilibili.com/video/BV1C14y1a7Gp 1小时快速入门typescript\n\n## 静态类型检查\n\n```js\n// js\nconst message = \"hello\";\nmessage();\t// 运行时报错\n```\n\n```typescript\n// ts\nconst message = \"hello\";\nmessage();\t// 编写时报错\n```\n\n\n\n## 使用工具\n\n```shell\nnpm install -g typescript\n\n# 使用工具检测并并生成js文件\ntsc hello.ts \n\n```\n\n## 优化编译\n\n1. 解决TS和JS冲突问题\n\n   ```shell\n   # 生成一个配置文件\n   tsc --init\n   # 然后 注释 type checkging 下的 script: true\n   ```\n\n2. 自动编译\n\n   ```shell\n   tsc --watch\n   ```\n\n3. 发出错误（发现错误时抛出异常且不会生成新的js文件）\n\n   ```shell\n   tsc --noEmitOnError hello.ts\n   ```\n\n4. 配套使用\n\n   ``` shell\n   #\n   tsc --init\n   # \n   tsc --noEmitOnError --watch hello.ts\n   ```\n\n## 显示类型\n\n```typescript\nfunction greet(person: string, date: Date) {\n    console.log(`Hello ${person}, today is ${date.toDateString()}!`);\n}\n\ngreet(\"xiaozhang\", new Date());\n\nlet msg = \"sadgf\";\nmsg = \"fdvw\";\nmsg = 100; // 错误\n```\n\n## 降级编译\n\ntsconfig.json 文件 \n\n```json\n/* Language and Environment */\n\"target\": \"es5\", \t// 指定版本号\n```\n\n## 严格模式\n\ntsconfig.json\n\n```json\n/* Type Checking */\n\"strict\": true,\n\"noImplicitAny\": true,\n\"strictNulChecks\": true,\n```\n\n \n\n# 快速入门typescript 模块\n\nsrc https://www.bilibili.com/video/BV1C14y1a7ou/ 25分钟快速入门typescript模块\n\n## 如何定义JS模块\n\n顶级声明\n\nimport \n\nexport\n\n## ES 模块语法\n\n```typescript\n// @filename: hello.ts\nexport default function helloWorld() {\n    console.log(\"Hello World\");\n}\n// @filename: cal.ts\nexport const PI = 3.14;\n\n// @filename: app.ts\nimport hello from './hello';\t// 后缀一般不写.ts\nimport {PI} from '/cal';\nhello();\nconsole.log(PI);\n```\n\ntsconfig.json 配置 (该文件 由 tsc --init 创建)\n\n```json\n\"module\": \"commonjs\",\n//...\n\"rootDir\": \"./src\",\t// 自己创建一个src目录\n\"outDir\": \"./dist\",\t// 自己创建一个dist目录\n```\n\n## 额外的导入语法\n\n```typescript\nimport {old ad new} from \"./index\"\t// 起别名\n\n// @filename index.ts\nexport let a = 33;\nexport default class Gen {};\n\n// @filename app.ts\nimport * as math from './index';\nconst a = math.a;\nconst gen1 = new math.default();\n\n```\n\n## Typescript 特定的ES模块语法\n\nexport type 导出一个类型\n\nimport type 导入一个类型\n\nimport  { type Cat } 导入一个对象\n\n### ES模块语法与CommonJS行为\n\nimport fs = require(\"fs\");\n\nconst code = fs.readFileSync(\"hello.ts\", \"utf8\");\n\n## CommonJS 语法\n\n导出\n\n- module\n- module.exports \n\n导入\n\n- require\n\nexample\n\n```typescript\n// @filename : maths.ts\nfunction abs(num: number) {\n    if(num<0) return num *= -1;\n    return num;\n}\n\nmodule.exports = {\n    pi: 3.14,\n    squareTwo: 1.41,\n    phi: 1.61,\n    abs: abs\n}\n// 类似于\n// exports.abs = abs\n// exports.pi = 3.14\n// ...\n\n// @filename: app.ts\nconst maths = require('./maths')\nconsole.log(maths.pi)\n```\n\n\n\n",
    //                 "publishDatetime": "2023-02-11T16:04:00.000Z",
    //                 "readingQuantity": 2455,
    //                 "collectionQuantity": 1503,
    //                 "likeQuantity": 478,
    //                 "createdAt": "2023-02-22T12:23:06.696Z",
    //                 "updatedAt": "2023-02-22T12:23:08.051Z",
    //                 "publishedAt": "2023-02-22T12:23:08.047Z"
    //             }
    //         }
    //     ]
    // }
}

// 计算属性 参考https://cn.vuejs.org/api/reactivity-core.html#computed
let showArticleArr = computed(
    ()=>getShowArticleArrByTag(articleArr, tagNow)
)


// 点击section做相应的文章跳转

const route = useRouter();
function routego(articleId) {
    route.push({
        path: `/juejin-article/${articleId}/detail`,
    })
}
</script>