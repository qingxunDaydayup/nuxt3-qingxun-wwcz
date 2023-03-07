export const dateTimeStrapiToDate = (datetime = "0000-00-00") => {
    // datetime 形式 2023-02-09T12:45:00.000Z
    // return 形式 2023-02-09

    return datetime.slice(0,10);
}