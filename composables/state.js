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

// 当前文章的作者信息(注意不是登陆用户的信息)
export const useAuthorNow = () => useState('authorNow', () => null );

export const setAuthorNow = (authorInfo) => {
    let authorNow = useAuthorNow();
    authorNow.value = authorInfo;
    if(authorNow == null || authorNow == undefined || authorNow.value == null){
        console.log("authorNow(null): ", authorNow);
    }else {
        console.log("authorNow: ", authorNow);
    }
    
}