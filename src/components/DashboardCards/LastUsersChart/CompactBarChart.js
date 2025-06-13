import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
const barData = [
  { name: '0', value: 465 }, { name: '1', value: 260 }, { name: '2', value: 355 },
  { name: '3', value: 220 }, { name: '4', value: 180 }, { name: '5', value: 290 },
  { name: '6', value: 400 }, { name: '7', value: 320 }, { name: '8', value: 280 },
  { name: '9', value: 190 }, { name: '10', value: 210 }, { name: '11', value: 330 },
  { name: '12', value: 240 }, { name: '13', value: 170 }, { name: '14', value: 310 },
  { name: '15', value: 420 }, { name: '16', value: 380 }, { name: '17', value: 270 },
  { name: '18', value: 230 }, { name: '19', value: 350 }, { name: '20', value: 410 },
  { name: '21', value: 290 }, { name: '22', value: 180 }, { name: '23', value: 220 },
  { name: '24', value: 300 }, { name: '25', value: 390 }, { name: '26', value: 250 },
  { name: '27', value: 200 }, { name: '28', value: 340 }, { name: '29', value: 370 },
  { name: '30', value: 280 }, { name: '31', value: 160 }, { name: '32', value: 240 },
  { name: '33', value: 320 }, { name: '34', value: 400 }, { name: '35', value: 360 },
  { name: '36', value: 230 }, { name: '37', value: 190 }, { name: '38', value: 270 },
  { name: '39', value: 350 }, { name: '40', value: 290 }, { name: '41', value: 210 },
  { name: '42', value: 330 }, { name: '43', value: 380 }, { name: '44', value: 260 },
  { name: '45', value: 200 }, { name: '46', value: 310 }, { name: '47', value: 420 },
  { name: '48', value: 340 }, { name: '49', value: 280 }
];

const CompactBarChart = () => {
  return (
    <div style={{ width: '100%', height: 40 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={barData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barCategoryGap={1}
        >
          <Bar 
            dataKey="value" 
            fill="#0F60FF" 
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompactBarChart;