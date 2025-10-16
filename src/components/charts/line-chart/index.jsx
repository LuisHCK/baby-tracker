import { LineChart as LineChartBase } from 'chartist'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

const LineChart = ({ className = '', data = {} }) => {
    const chartContainer = useRef(null)
    const [chart, setChart] = useState(null)

    console.log(data)

    useEffect(() => {
        const initChart = async () => {
            if (!chart) {
                await import('chartist/dist/index.css')
                const newChart = new LineChartBase(chartContainer.current, data)
                setChart(newChart)
            } else {
                chart.update(data)
            }
        }
        initChart()
    }, [data, chart])

    return (
        <div className={className}>
            <div ref={chartContainer} />
        </div>
    )
}

LineChart.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        labels: PropTypes.arrayOf(PropTypes.string),
        series: PropTypes.arrayOf(PropTypes.array)
    })
}

export default LineChart
