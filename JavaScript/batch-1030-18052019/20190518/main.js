setInterval(() => {
        document
          .querySelector('h1')
          .textContent = "New heading" + (
        new Date());
      }, 1000);