const Class9 = require("../../../models/class9");
const Class10 = require("../../../models/class10");
const Class11 = require("../../../models/class11");
const Class12 = require("../../../models/class12");
const Jnv = require("../../../models/jnv");
const Polytechnic = require("../../../models/polytechnic");
const Chs = require("../../../models/chs");
const Jeemain = require("../../../models/jeemain");
const Notification = require("../../../models/notification");
module.exports.class9data = async function (req, res) {
  try {
    let class9 = await Class9.create({
      data: req.body.data,
      subjet: req.body.subjet,
    });
    if (class9) {
      return res.json(200, {
        message: "data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getclass9data = async function (req, res) {
  try {
    let data = await Class9.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
module.exports.class10data = async function (req, res) {
  try {
    let class10 = await Class10.create({
      data: req.body.data,
      subjet: req.body.subjet,
    });
    if (class10) {
      return res.json(200, {
        message: " data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getclass10data = async function (req, res) {
  try {
    let data = await Class10.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
module.exports.class11data = async function (req, res) {
  try {
    let class11 = await Class11.create({
      data: req.body.data,
      subjet: req.body.subjet,
    });
    if (class11) {
      return res.json(200, {
        message: " data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getclass11data = async function (req, res) {
  try {
    let data = await Class11.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
module.exports.class12data = async function (req, res) {
  try {
    let class12 = await Class12.create({
      data: req.body.data,
      subjet: req.body.subjet,
    });
    if (class12) {
      return res.json(200, {
        message: " data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getclass12data = async function (req, res) {
  try {
    let data = await Class12.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
module.exports.jeemaindata = async function (req, res) {
  try {
    let jeemain = await Jeemain.create({
      data: req.body.data,
      subjet: req.body.subjet,
    });
    if (jeemain) {
      return res.json(200, {
        message: " data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getjeemaindata = async function (req, res) {
  try {
    let data = await Jeemain.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
module.exports.chsdata = async function (req, res) {
  try {
    let chs = await Chs.create({
      data: req.body.data,
      subjet: req.body.subjet,
    });
    if (chs) {
      return res.json(200, {
        message: " data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getchsdata = async function (req, res) {
  try {
    let data = await Chs.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
module.exports.polytecnicdata = async function (req, res) {
  try {
    let polytechnic = await Polytechnic.create({
      data: req.body.data,
      subjet: req.body.subjet,
    });
    if (polytechnic) {
      return res.json(200, {
        message: " data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getpolytecnicdata = async function (req, res) {
  try {
    let data = await Polytechnic.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
module.exports.jnvdata = async function (req, res) {
  try {
    let jnv = await Jnv.create({
      data: req.body.data,
      subjet: req.body.subjet,
    });
    if (jnv) {
      return res.json(200, {
        message: " data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getjnvdata = async function (req, res) {
  try {
    let data = await Jnv.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.notifications = async function (req, res) {
  try {
    let notifications = await Notification.create({
      data: req.body.data,
    });
    if (notifications) {
      return res.json(200, {
        message: " data succesfully",
      });
    }
  } catch (err) {
    console.error(err);
    return res.json(500, {
      message: `${err}`,
    });
  }
};

module.exports.getnotifications = async function (req, res) {
  try {
    let data = await Notification.find();

    if (!data) {
      return res.json(422, {
        message: "data is not found in database",
      });
    }
    return res.json(200, {
      message: "data is found",
      success: true,
      data: {
        data: data,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
