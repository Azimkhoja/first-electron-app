const func = async () => {
    const res = await window.versions.ping()

    console.log(res);
}