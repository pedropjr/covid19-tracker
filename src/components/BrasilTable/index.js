import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container } from './styles';

export default function BrasilTable() {
  const [brasilData, setBrasilData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadData() {
    const response = await api.get('api/report/v1');
    await setBrasilData(response.data.data);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>uf</th>
            <th>casos</th>
            <th>suspeitos</th>
            <th>mortes</th>
          </tr>
        </thead>
        {loading ? (
          ' '
        ) : (
          <tbody>
            {brasilData.map((item) => (
              <tr key={item.uid}>
                <td>{item.state.toLowerCase()}</td>
                <td>{item.cases.toLocaleString()}</td>
                <td>{item.suspects.toLocaleString()}</td>
                <td>{item.deaths.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </Container>
  );
}
