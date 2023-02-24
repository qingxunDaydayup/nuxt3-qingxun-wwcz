// 当前选中的标签
export const useTagNow = () => useState('tagNow', () => null);

export const logTagNow = () => {
    let tagNow = useTagNow();
    console.log(tagNow.value);
}

export const setTagNow = (obj) => {
    let tagNow = useTagNow();
    tagNow.value = obj;
    if(tagNow == null || tagNow == undefined || tagNow.value == null){
        console.log("更新tagNow: ", tagNow);
    }else {
        console.log("更新tagNow, tagId: ", tagNow.value.id);
    }
}