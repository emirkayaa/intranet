<template>
  <div>
    <div class="container p-2">
      <div class="my-2">
        <router-link
          class="border border-2 rounded p-2 text-decoration-none text-danger fs-5"
          to="/"
          ><span>Geri</span></router-link
        >
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">İzin Listesi</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table text-center">
                  <thead>
                    <th v-for="key in tableName" :key="key">
                      <span class="fw-semibold fs-5">{{ key.label }}</span>
                    </th>
                  </thead>
                  <tbody>
                    <tr v-for="data in paginatedData" :key="data">
                      <td>
                        {{ data[0] }}
                      </td>
                      <td>
                        {{ data[1] }}
                      </td>
                      <td>
                        {{ data[2].slice(0, 10) }}
                      </td>
                      <td>
                        {{ data[3].slice(0, 10) }}
                      </td>
                      <td>
                        {{ data[4].slice(0, 10) }}
                      </td>
                      <td>
                        {{ data[5] }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-2 align-items-center">
        <div class="pagination d-flex align-items-center mx-2">
      <button class="btn btn-outline-danger" @click="prevPage" :disabled="currentPage === 1">Önceki Sayfa</button>
      <span class="mx-2">{{ currentPage }} / {{ totalPages }}</span>
      <button class="btn btn-outline-danger" @click="nextPage" :disabled="currentPage === totalPages">Sonraki Sayfa</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      data: {},
      tableName: {},
      pageSize: 100,
      currentPage: 1,
    };
  },
  methods: {
    getData() {
      axios
        .get(
          "http://10.211.65.196:8080/svc/sbys/sistem/bilgi_servisleri/intranet/IzinListele",
          {
            headers: {
              "Access-Token": "9747C3235A15402D94CF556B55E9DDFB",
            },
          }
        )
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
          this.tableName = this.data.fields;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  mounted() {
    this.getData();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.rows?.length / this.pageSize);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.data.rows?.slice(startIndex, endIndex);
    },
  },
};
</script>

<style></style>
