const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema({
  kolo_name: {
    type: String,
    required: true,
  },
  wallet: {
    type: Number,
    default: 0.0,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentHis: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user1: {
    name: {
      type: String,
      default: "",
    },
    payment1: {
      type: Boolean,
      default: false,
    },
    payment2: {
      type: Boolean,
      default: false,
    },
    payment3: {
      type: Boolean,
      default: false,
    },
    payment4: {
      type: Boolean,
      default: false,
    },
    payment5: {
      type: Boolean,
      default: false,
    },
    payment6: {
      type: Boolean,
      default: false,
    },
    payment7: {
      type: Boolean,
      default: false,
    },
  },
  user2: {
    name: {
      type: String,
      default: "",
    },
    payment1: {
      type: Boolean,
      default: false,
    },
    payment2: {
      type: Boolean,
      default: false,
    },
    payment3: {
      type: Boolean,
      default: false,
    },
    payment4: {
      type: Boolean,
      default: false,
    },
    payment5: {
      type: Boolean,
      default: false,
    },
    payment6: {
      type: Boolean,
      default: false,
    },
    payment7: {
      type: Boolean,
      default: false,
    },
  },
  user3: {
    name: {
      type: String,
      default: "",
    },
    payment1: {
      type: Boolean,
      default: false,
    },
    payment2: {
      type: Boolean,
      default: false,
    },
    payment3: {
      type: Boolean,
      default: false,
    },
    payment4: {
      type: Boolean,
      default: false,
    },
    payment5: {
      type: Boolean,
      default: false,
    },
    payment6: {
      type: Boolean,
      default: false,
    },
    payment7: {
      type: Boolean,
      default: false,
    },
  },
  user4: {
    name: {
      type: String,
      default: "",
    },
    payment1: {
      type: Boolean,
      default: false,
    },
    payment2: {
      type: Boolean,
      default: false,
    },
    payment3: {
      type: Boolean,
      default: false,
    },
    payment4: {
      type: Boolean,
      default: false,
    },
    payment5: {
      type: Boolean,
      default: false,
    },
    payment6: {
      type: Boolean,
      default: false,
    },
    payment7: {
      type: Boolean,
      default: false,
    },
  },
  user5: {
    name: {
      type: String,
      default: "",
    },
    payment1: {
      type: Boolean,
      default: false,
    },
    payment2: {
      type: Boolean,
      default: false,
    },
    payment3: {
      type: Boolean,
      default: false,
    },
    payment4: {
      type: Boolean,
      default: false,
    },
    payment5: {
      type: Boolean,
      default: false,
    },
    payment6: {
      type: Boolean,
      default: false,
    },
    payment7: {
      type: Boolean,
      default: false,
    },
  },
  user6: {
    name: {
      type: String,
      default: "",
    },
    payment1: {
      type: Boolean,
      default: false,
    },
    payment2: {
      type: Boolean,
      default: false,
    },
    payment3: {
      type: Boolean,
      default: false,
    },
    payment4: {
      type: Boolean,
      default: false,
    },
    payment5: {
      type: Boolean,
      default: false,
    },
    payment6: {
      type: Boolean,
      default: false,
    },
    payment7: {
      type: Boolean,
      default: false,
    },
  },
  user7: {
    name: {
      type: String,
      default: "",
    },
    payment1: {
      type: Boolean,
      default: false,
    },
    payment2: {
      type: Boolean,
      default: false,
    },
    payment3: {
      type: Boolean,
      default: false,
    },
    payment4: {
      type: Boolean,
      default: false,
    },
    payment5: {
      type: Boolean,
      default: false,
    },
    payment6: {
      type: Boolean,
      default: false,
    },
    payment7: {
      type: Boolean,
      default: false,
    },
  },
});

const weeklyContributionmodel =
  mongoose.model.new_weeklyContributiontable ||
  mongoose.model("new_weeklyContributiontable", contributionSchema);

module.exports = weeklyContributionmodel;
