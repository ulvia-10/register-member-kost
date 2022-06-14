import React, { useEffect, useState } from "react";
import "../components/TabelListMember.scss";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import moment from "moment";
import { deleteMemberAction, fetchMemberAction } from "../actions/Member";

const TabelListMember = (props) => {
  const { deleteMember, fetchMember, member } = props;
  const state = useSelector((state) => state.MemberReducer);
  const [anggota, setAnggota] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const response = await fetchMember();
    if (response) {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteMember(id);
      if (response) {
        setIsLoading(false);
        fetching();
      }
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };

  useEffect(() => {
    console.log("state: ", state);
  }, [state]);

  return (
    <>
      {anggota === null ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="cardTable">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">No Telepon</th>
                <th scope="col">Alamat</th>
                <th scope="col">Tanggal Masuk</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {member?.length > 0 ? (
                member?.map((member, id) => (
                  <tr key={id}>
                    <th scope="row">{id + 1}</th>
                    <td>{member?.nama}</td>
                    <td>{member?.email}</td>
                    <td>{member?.noTelp}</td>
                    <td>{member?.alamat}</td>
                    <td>{moment(member?.tanggal).format("D MMM YYYY")}</td>
                    <td className="buttonHandle">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(member.id)}
                      >
                        <FaTrash />
                      </button>
                      <Link to={`/editMember/${member.id}`}>
                        <button className="btn btn-success btn-sm">
                          <FaEdit />
                        </button>
                      </Link>
                      <Link to={`/Detail/${member.id}`}>
                        <button className="btn btn-primary btn-sm">
                          <FaEye />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <h6
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Oops! No Data Here !
                </h6>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    member: state.MemberReducer?.listMember,
  };
};

const mapDispatchtoProps = (dispatch) => {
  //making a props from dispatch data
  return {
    fetchMember: async () => dispatch(fetchMemberAction()),
    deleteMember: async (id) => dispatch(deleteMemberAction(id)), //kalau ada parameternya harus selalu dikirim dlm argumen (id)
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(TabelListMember);
