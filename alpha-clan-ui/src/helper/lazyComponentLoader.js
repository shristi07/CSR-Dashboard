const lazyComponentLoader = (lazyComponent, retries = 10, interval = 1500) =>
  new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error) => {
        setTimeout(
          () => {
            if (retries === 1) {
              reject("Maximum retries exceeded");
              return;
            }
            lazyComponent(lazyComponent, retries--, interval).then(resolve, reject)
          },
          interval
        )
      });
  })

export default lazyComponentLoader;
