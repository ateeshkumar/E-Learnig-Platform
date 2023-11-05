import React, { useEffect, useState} from 'react';
import axios  from 'axios';
import './css/midle.css';
import CodeSnippit from '../CodeSnippit';
import Horgontle from '../GoogleAds/Horgontle';
import Loader from '../layout/Loader';

const Midle = ({id,add,content}) => {
    const [idx, setidx] = useState(id);
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState([]);

    const getDescription = async (add, idx) => {
      try {
        const { data } = await axios.get(
          `https://alphapartical-api-v2-l7kz.onrender.com/api/v1/content/get-detail-${add}/${idx}`
        );
        if (data?.success) {
          setTitle(data?.description.title);
          setdesc(data?.description.description);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getDescription(add, idx);
    }, [add, idx]);
    useEffect(() => {
      setidx(id);
    }, [id]);
  return (
    <>
      <div className="mid-container">
        <div className="cos-details">
          <div className="details">
            <h2>{title}</h2>
            {desc && desc.length > 0 ? (
              desc.map((item) => (
                <div>
                  <h4>{item.subtitle}</h4>
                  <h4>{item.question}</h4>

                  <p>{item.subdescription}</p>
                  {item.code && <CodeSnippit type={add} code={item.code} />}
                  <p>{item.options}</p>
                  <p>{item.answer}</p>
                </div>
              ))
            ) : (
              <h4><Loader/></h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Midle
