// window.config = {
//     // default: '/'
//     routerBasename: '/',
//     extensions: [],
//     modes: [],
//     showStudyList: true,
//     filterQueryParam: false,
//     servers: {
//       dicomWeb: [
//         {
//           name: 'Orthanc',
//           wadoUriRoot: '/orthanc/wado',
//           qidoRoot: '/orthanc/dicom-web',
//           wadoRoot: '/orthanc/dicom-web',
//           imageRendering: 'wadors',
//           thumbnailRendering: 'wadors',
//           enableStudyLazyLoad: true,
//           supportsFuzzyMatching: true,
//         },
//       ],
//     },
//     maxConcurrentMetadataRequests: 5,
//   };

window.config = {
    routerBasename: "/",
    extensions: [],
    modes: [],
    showStudyList: !0,
    showWarningMessageForCrossOrigin: !0,
    showCPUFallbackMessage: !0,
    showLoadingIndicator: !0,
    strictZSpacingForVolumeViewport: !0,
    defaultDataSourceName: "dicomweb",
    dataSources: [{
        namespace: "@ohif/extension-default.dataSourcesModule.dicomweb",
        sourceName: "dicomweb",
        configuration: {
            friendlyName: "Orthanc",
            name: "Orthanc",
            // You probably think this should be /orthanc/wado, but that's not it
            wadoUriRoot: "/orthanc/wado",
            qidoRoot: "/orthanc/dicom-web",
            wadoRoot: "/orthanc/dicom-web",
            qidoSupportsIncludeField: !1,
            imageRendering: "wadors",
            thumbnailRendering: "wadors",
            enableStudyLazyLoad: !0,
            supportsFuzzyMatching: !1,
            supportsWildcard: !0,
            staticWado: !0,
            singlepart: "bulkdata,video",
            bulkDataURI: {
                enabled: !0,
                relativeResolution: "studies"
            },
            omitQuotationForMultipartRequest: !0
        }
    }, {
        namespace: "@ohif/extension-default.dataSourcesModule.dicomjson",
        sourceName: "dicomjson",
        configuration: {
            friendlyName: "dicom json",
            name: "json"
        }
    }, {
        namespace: "@ohif/extension-default.dataSourcesModule.dicomlocal",
        sourceName: "dicomlocal",
        configuration: {
            friendlyName: "dicom local"
        }
    }],
    httpErrorHandler: e => {
        console.warn(e.status),
        console.warn("test, navigate to https://ohif.org/")
    },
    hotkeys: [{
        commandName: "incrementActiveViewport",
        label: "Next Viewport",
        keys: ["right"]
    }, {
        commandName: "decrementActiveViewport",
        label: "Previous Viewport",
        keys: ["left"]
    }, {
        commandName: "rotateViewportCW",
        label: "Rotate Right",
        keys: ["r"]
    }, {
        commandName: "rotateViewportCCW",
        label: "Rotate Left",
        keys: ["l"]
    }, {
        commandName: "invertViewport",
        label: "Invert",
        keys: ["i"]
    }, {
        commandName: "flipViewportHorizontal",
        label: "Flip Horizontally",
        keys: ["h"]
    }, {
        commandName: "flipViewportVertical",
        label: "Flip Vertically",
        keys: ["v"]
    }, {
        commandName: "scaleUpViewport",
        label: "Zoom In",
        keys: ["+"]
    }, {
        commandName: "scaleDownViewport",
        label: "Zoom Out",
        keys: ["-"]
    }, {
        commandName: "fitViewportToWindow",
        label: "Zoom to Fit",
        keys: ["="]
    }, {
        commandName: "resetViewport",
        label: "Reset",
        keys: ["space"]
    }, {
        commandName: "nextImage",
        label: "Next Image",
        keys: ["down"]
    }, {
        commandName: "previousImage",
        label: "Previous Image",
        keys: ["up"]
    }, {
        commandName: "setZoomTool",
        label: "Zoom",
        keys: ["z"]
    }, {
        commandName: "windowLevelPreset1",
        label: "W/L Preset 1",
        keys: ["1"]
    }, {
        commandName: "windowLevelPreset2",
        label: "W/L Preset 2",
        keys: ["2"]
    }, {
        commandName: "windowLevelPreset3",
        label: "W/L Preset 3",
        keys: ["3"]
    }, {
        commandName: "windowLevelPreset4",
        label: "W/L Preset 4",
        keys: ["4"]
    }, {
        commandName: "windowLevelPreset5",
        label: "W/L Preset 5",
        keys: ["5"]
    }, {
        commandName: "windowLevelPreset6",
        label: "W/L Preset 6",
        keys: ["6"]
    }, {
        commandName: "windowLevelPreset7",
        label: "W/L Preset 7",
        keys: ["7"]
    }, {
        commandName: "windowLevelPreset8",
        label: "W/L Preset 8",
        keys: ["8"]
    }, {
        commandName: "windowLevelPreset9",
        label: "W/L Preset 9",
        keys: ["9"]
    }]
};