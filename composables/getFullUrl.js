// const cmsBaseUrl = process.env.VUE_APP_CMS_BASE_URL;
const cmsBaseUrl = "http://180.102.19.159";
const cmsPort = "1337"
const cmsFullUrl = `${ cmsBaseUrl }:${ cmsPort }`;
export function getBaseUrl() {
    return `${cmsBaseUrl}:${cmsPort}`;
}
export default (partUrl, populate=[])=>{

    // populate 参考 https://blog.csdn.net/m0_58035226/article/details/128771906

    let url = "";

    // 检查partUrl是否有以/开头
    if(partUrl[0] == '/'){
        url = cmsFullUrl + partUrl;
    } else {
        url = `${cmsFullUrl}/${partUrl}`;
    }

    if(populate.length>0) {
        url = url + "?";
        populate.forEach(element => {
            url += `populate=${element}&`
        });

        // 删去最后的 &
        url=url.slice(0, url.length-1);
    }

    return url
}; 