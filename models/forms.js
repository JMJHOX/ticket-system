const { Text, Select, CalendarDay } = require("@keystonejs/fields");
const { ticketCategory } = require("./Utils.js");
const { format, addMonths } = require("date-fns");
const today = new Date();
const monthsLater = addMonths(today, 3);
exports.FormsAirlines = {
  fields: {
    /**
     * A
     * =============
     */
    category: {
      type: Select,
      dataType: "string",
      options: ticketCategory,
      isRequired: true,
    },
    eventDate: {
      type: CalendarDay,
      format: "yyyy-MM-dd",
      dateFrom: format(today, "yyyy-MM-dd"),
      dateTo: format(monthsLater, "yyyy-MM-dd"),
      defaultValue: format(today, "yyyy-MM-dd"),
      isRequired: true,
    },
    reportingStation: {
      type: Select,
      dataType: "string",
      options: reportStation,
      isRequired: true,
    },
    responsibleStation: {
      type: Select,
      dataType: "string",
      options: stationList,
      isRequired: true,
    },
    additionalInfo: {
      type: Text,
      isRequired: true,
    },
    /**
     * A.2
     * =============
     */
    passengerCompleteName: {
      type: Text,
      isRequired: true,
    },
    passengerNationality: {
      type: Select,
      dataType: "string",
      options: countryList,
      isRequired: true,
    },
    passengerPassportID: {
      type: Text,
      isRequired: true,
    },
      /**
     * A.3
     * =============
     */
    passengerPRNNumber: {
      type: Text,
      isRequired: true,
    },
    passengerTicketNumber: {
      type: Text,
      isRequired: true,
    },
    passengerInboundFlight: {
      type: Select,
      dataType: "string",
      options: listInbound,
      isRequired: true,
    },
    passengerFlightOrigin: {
      type: Select,
      dataType: "string",
      options: stationList,
      isRequired: true,
    },
    passengerFlightDestination: {
      type: Select,
      dataType: "string",
      options: stationList,
      isRequired: true,
    },
    passengerWCI: {
      type: Text,
      isRequired: false,
    },
    passengerAgentSign: {
      type: Select,
      dataType: "string",
      options: stationList,
      isRequired: true,
    },

      /**
     * A.4
     * =============
     */
    entityInterceptor: {
      type: Select,
      dataType: "string",
      options: interceptorOptions,
      isRequired: true,
    },
    entityMigrationResolution: {
      type: Select,
      dataType: "string",
      options: resMigrOptions,
      isRequired: true,
    },
    entityAirlineSanction: {
      type: Select,
      dataType: "string",
      options: authSanctionOptions,
      isRequired: true,
    },
         /**
     * A.5
     * =============
     */
    entityAirlineCosts: {
      type: Select,
      dataType: "string",
      options: authCostOptions,
      isRequired: true,
    },
    /**
     * B
     * =============
     */
    feeNumberReference: {
      type: Text,
      isRequired: false,
    },
    feeCaseAppeal: {
      type: Text,
      isRequired: false,
    },
    feeCaseAppeal: {
      type: Text,
      isRequired: false,
    },
    /**
     * IF TRUE
     * =============
     */
    feeCaseSustent: {
      type: Text,
      isRequired: false,
    },
    feeCaseSustentDocument: {
      type: Text,
      isRequired: false,
    },
    feeCostNotification: {
      type: Text,
      isRequired: false,
    },
    feeCostNotificationDocument: {
      type: Text,
      isRequired: false,
    },
    authorityFineResNumberReference: {
      type: Text,
      isRequired: false,
    },
    authorityFineResNumberReference: {
      type: Text,
      isRequired: false,
    },

    /**
     * D
     * =============
     */
    supplierIsFeed: {
      type: Text,
      isRequired: false,
    },
    supplierStatus: {
      type: Text,
      isRequired: false,
    },
    supplierFeeDate: {
      type: Text,
      isRequired: false,
    },
    /**
     * FEE NO RECOVERED
     * =============
     */ supplierFeeNotRecDesc: {
      type: Text,
      isRequired: false,
    },
    supplierFeeNotRecReason: {
      type: Text,
      isRequired: false,
    },
    supplierFeeNotRecAddInfo: {
      type: Text,
      isRequired: false,
    },
    supplierFeeDescActionTaken: {
      type: Text,
      isRequired: false,
    },
    supplierFeeDocument: {
      type: Text,
      isRequired: false,
    },

    /**
     * AUTOPOPULATE
     * =============
     */

    societyPayer: {
      type: Text,
      isRequired: false,
    },

    costCenter: {
      type: Text,
      isRequired: false,
    },
    intercompanySociety: {
      type: Text,
      isRequired: false,
    },
    accMigration: {
      type: Text,
      isRequired: false,
    },
    accCustody: {
      type: Text,
      isRequired: false,
    },
    auxiliar: {
      type: Text,
      isRequired: false,
    },
    creditor: {
      type: Text,
      isRequired: false,
    },
    caseType: {
      type: Text,
      isRequired: false,
    },
    stationType: {
      type: Text,
      isRequired: false,
    },
    contableStatus: {
      type: Text,
      isRequired: false,
    },
    payCustodyStatus: {
      type: Text,
      isRequired: false,
    },
  },
  labelResolver: (item) => item.name,
};
