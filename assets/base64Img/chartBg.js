const chartBg = {
    chartBg: 'data:image/png;base64,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'
}


export {chartBg}




